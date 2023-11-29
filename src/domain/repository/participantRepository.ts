import Participant from "@/src/entities/Participant";

export default interface ParticipantRepository {
	getParticipantById(participant_id: string): Promise<Participant | {}>;
	getAllParticipants(): Promise<Participant[]>;
	createParticipant(participant: Participant): Promise<Boolean>;
	updateParticipant(participant: Participant, participant_id: string): Promise<Participant| {}>;
	deletepParticipant(participant_id: string): Promise<boolean>; 
}