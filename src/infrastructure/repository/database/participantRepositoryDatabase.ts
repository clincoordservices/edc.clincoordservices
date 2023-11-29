import ParticipantRepository from "@/src/domain/repository/participantRepository";
import Participant from "@/src/entities/Participant";
import Connection from "../../database/connection";
import { ObjectId } from "mongodb";

export default class ParticipantRepositoryDatabase implements ParticipantRepository {

    constructor(private connection: Connection, readonly collectionName: string) {}

    async getParticipantById(participant_id: string): Promise<{} | Participant> {
        try {
            const usersCollection = await this.connection.getModel(this.collectionName);
            const project = ((await usersCollection.findOne({ _id: new ObjectId(participant_id)})) as unknown) as Participant;
            return project;
          } catch (error) {
            throw new Error(`Error fetching project by id: `);
          }
    }
    async getAllParticipants(): Promise<Participant[]> {
        try {
            const participantsCollection =  await this.connection.getModel(this.collectionName);
            const participants:any = await participantsCollection.find().toArray();
            return participants;
          } catch (error) {
            throw new Error(`Error fetching all participants: `);
          }
    }
    async createParticipant(participant: Participant): Promise<Boolean> {
        try {
            const projectCollection = await this.connection.getModel(this.collectionName);
            const participant_ = await projectCollection.insertOne({...participant});

            if(participant_) return true; 
            return false;
      } catch (error) {
          throw new Error(`Error creating user:`);
      }
    }
    async updateParticipant(participant: Participant, participant_id: string): Promise<{} | Participant> {
        try {
            const usersCollection = await this.connection.getModel(this.collectionName);
            const result = await usersCollection.findOneAndUpdate(
              { _id: new ObjectId(participant_id) },
              { $set: participant },
              { returnDocument: 'after' }
            );
            if(result)
              return result.value;
              return {}
      } catch (error) {
            throw new Error(`Error updating user: `);
      }
    }
    async deletepParticipant(participant_id: string): Promise<boolean> {
        try {
            const participantCollection = await this.connection.getModel(this.collectionName);
            const result = await participantCollection.deleteOne({ _id: new ObjectId(participant_id) }); 
            return result.deletedCount === 1;
      } catch (error) {
            throw new Error(`Error deleting user`);
      }
    }



}