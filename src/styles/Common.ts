import { theme } from "./Theme"

type FontPropsType = {
  family?:string,
  weight?:number,
  color?:string, 
  lineHeight:number
}

export const font = ({family,weight,color,lineHeight }:FontPropsType) => `
  foht-family: ${family || "Poppins"};
  font-weight: ${weight || 400};
  color:${color || theme.colors.font};
  lineHeight:${lineHeight || 1.2};
`