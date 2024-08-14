// types/global.d.ts

export { }


declare global {
    interface ISkills{
        title?:string,
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