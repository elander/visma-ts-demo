class Room{
    private family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }
    showFamily(){
        console.log(this.family);
    }
    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room}'s room with ${soap}`);
    }
}

const nab = new Room('Max');
const shi = new Room('Caroline');
const hri = new Room('Andreas');
const mou = new Room('Lena');
nab.dobShikha;
nab.addFamilyMember('Malte');
nab.addFamilyMember('Lisa');
nab.addFamilyMember('Jonas');
mou.cleanRoom('Vim');
nab.showFamily();