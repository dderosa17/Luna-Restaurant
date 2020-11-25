import styled from 'styled-components'

export const ReviewsContainer = styled.div `
height: 720px;
display: grid
grid-template-columns: repeat(4, 1fr);
grid-gap: 30px;
`;

export const BodyContainer = styled.div `
    width: 100%;
    background: #F2F2F2;
` ;

export const HorizontalLine = styled.hr `
border: 1px solid #D8D8D8;
background: #D8D8D8;
width: 630px;
pargin-top: 15px;
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

`

export const TtitleContent = styled.div `
    display: flex;
    margin-top: 20px;
    height: 54px;
    align-items: center;
    margin-left:405px; 
   
`;

// Card reviews details

export const ReviewCardWrapper = styled.div `
   height:410px;
   width: 270px;
   border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 3px;
    background: #FFFFFF;
    margin-left: 134px;
    margin-top: 57px;
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

export const ReviewContent = styled.div `
   display: block;
   margin-left: 10px;

   h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #E47D31;
    margin-top: 14px;
    margin-bottom: 8px;
   }

   p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #4C4C4C;
   }
`;

export const LikeCommentButton = styled.div `
display:flex;
align-items:center;
justify-content: center;
`;

export const ButtonLike = styled.button `
border: none;
border-radius:20px 0px 0px 20px; 
background: rgba(145, 145, 145, 0.6);
color: white;
height: 33px;
width: 124px;
`;

export const ButtonComment = styled.button `
border-radius:0px 20px 20px 0px; 
border: none;
background: rgba(145, 145, 145, 0.6);
color: white;
height: 33px;
width: 124px;
`

export const CommentsArea = styled.div `
   display: block;
   margin-left: 10px;

   h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
   }

   h5 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #E47D31;
   }

   p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
   }


`;
