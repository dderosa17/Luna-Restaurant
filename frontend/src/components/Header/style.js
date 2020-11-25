import styled from 'styled-components';

export const MainContainer = styled.div`
    background: #FFFFFF;
    display:flex;
    align-items: center;
    width: 100%;
    height:90px;
    // height: 71px;
    // border:yellow 2px solid;
`

export const LogoWrapper = styled.div`
    display:flex;
    margin-left:1%;
    height:100%;
    width:auto;
    // border:solid 2px blue;
`

// export const HeaderNavigation = styled.div`
//     display: inline-block;
//     margin-right: 62px;
//     border:solid 2px red;
// `


export const SinUpButton = styled.button`
    background: #E47D31;
    height: 41px;
    width: 90px;
    color: white;
    margin-right:1px;
    border: none;
    border-radius:20px 0px 0px 20px;
    outline:none; 
    cursor: pointer;
    
`
export const SinInButton = styled.button`
    background: #E47D31;
    height: 41px;
    width: 90px;
    color: white;
    border-radius:0px 20px 20px 0px; 
    border: none;
    outline:none;
    cursor: pointer;
    
`
export const SinOutButton = styled.button`
    background: #E47D31;
    height: 41px;
    width: 90px;
    color: white;
    border-radius: 20px; 
    border: none;
    outline:none;
    cursor: pointer;
    
`

export const ContainerLink = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    height:100%;
    width:35%;
    margin-left:50%;
    // border:solid 2px blue;

`

export const LinkPages = styled.p`
    // text-decoration: none;
    color:black;
    font-size: 20px;
    font-weight: normal;
    &:hover {
        // font-weight: bold;
    //   padding-bottom: 30px;
      border-bottom: 3px solid #E47D31;
      font-weight: bold;
}
`


export const ContainerButton = styled.div`
    display:flex;
    // justify-content: center;
    align-items:center;
    height:100%;
    width:14%;
    // margin-left:50%;
    // border:solid 2px black;
`

// export const RightContainer = styled.div`
//     float: right;
//    width:50%;
//    margin-top: 21px;
//    text-decoration: none;
//     display: inline-block;
//     margin-right: 62px;
//     border: 2px solid red;

//     p {
//         display: inline-block;
//         margin-right: 62px; 
//         color: #4A4A4A;
//         font-style: normal;
//         font-weight: normal;
//         font-size: 20px;
//         line-height: 23px;
//         font-family: Helvetica
//     }
//     p:hover {
//         font-weight: bold;
//         padding-bottom: 13px;
//         border-bottom: 2px solid #E47D31;
//     }

// `

export const ContainerButtonLoginSignup = styled.div`

    height:100%;
    width:2%;
    // border:2px solid blue;
`

export const LogoLuna = styled.img`

`