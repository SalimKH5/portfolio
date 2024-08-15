// types/global.d.ts

export { }


declare global {
    interface ISkillDetail{
        icon:string,
        text:string
    }
    interface ISkills{
        title?:string,
        details?:ISkillDetail[]
    }
    
    interface IWork{
        title?:string,
        image:string
        id:number,
        detail?:string,
        url?:string,
        images?:string[]
    }

}