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
    interface IEvent{
        date:string,
        title?:string,
        role?:string,
        company?:string,
        responsibilities?:string[],
        localisation?:string
    }
    interface EducationExperience {
        start_date: string;  // Date in the format "DD Month YYYY"
        end_date: string;    // Date in the format "DD Month YYYY" or "currently"
        degree: string;      // Degree description
        institution: string; // Institution name
        notes?: string;      // Optional notes
      }
    
    interface IWork{
        title?:string,
        image:string
        id:number,
        detail?:string,
        url?:string,
        githubUrl?:string,
        images?:string[],
        icons?:ISkillDetail[]
    }

    interface IoptionEmail{
        from: string,
        to: string,
        subject: string,
        html: any, 
    }
    

}