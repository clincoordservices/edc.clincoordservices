import IParticipant from "../domain/models/Participant";

class Participant  implements IParticipant  {
    constructor( 
        public readonly id: string,
        public readonly user_id: string,
        public readonly birthdadate: Date,
        public readonly participante_status: string, 
        ){} 
}
export default Participant ;
