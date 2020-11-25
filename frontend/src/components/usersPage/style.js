import styled from 'styled-components'

export const TtitleContent = styled.div `
    display: flex;
    //justify-content: space-evenly;
    margin-top: 20px;
    height: 54px;
    align-items: center;
    margin-left:405px; 
   
`;

export const LinkPages = styled.a `
font-weight: bold;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #4C4C4C;
margin-left: 80px;


&:hover {
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 3px solid #E47D31;
   }

`;

export const BodyContainer = styled.div `
    width: 100%;
    height: 820px;
    background: #F2F2F2;
` ;

export const HorizontalLine = styled.hr `
border: 1px solid #D8D8D8;
background: #D8D8D8;
width: 630px;
margin-top: 15px;
`;

export const UsersComments = styled.div `
display: grid
grid-template-columns: repeat(4, 1fr);
grid-gap: 30px;
`;

export const CommentWrapper = styled.div `
   border: 2px solid red;
   height: 190px;
   width: 270px;
   margin-left: 145px;
   margin-top: 60px;
`;

export const TopContainer = styled.div `
   border-top: 8px solid #E47D31;
   height: 66px;
   border-bottom: 1px solid #EBEBEB;
   display: flex;
   justify-content: flex-start;

   h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 23px;
    color: #E47D31;
    margin-top: 10px;
    border: 1px solid red;
   }

   p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #4C4C4C;
    margin-top: 38px;
    border: 1px solid black;
   }
`;

export const Image = styled.div `
   width: 65px;
   height: 65px;
   border: 1px solid #EBEBEB;

`;

export const Text = styled.div `
   display: block;
   margin-left: 10px;
`