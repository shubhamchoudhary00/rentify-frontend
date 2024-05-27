import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {connect, useSelector} from 'react-redux';
// import { signOutAPI } from '../actions';
import { getAuth, signOut } from "firebase/auth";
import {app} from '../firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [activeNav, setActiveNav] = useState('Home');
    const [search,setSearch]=useState('');
    const {user}=useSelector((state)=>state.user)
    const auth=getAuth();
    const isAdmin=user? user.isAdmin:false;
    const isCollege=user? user.isCollege:false;
    const location=useLocation();

const navigate=useNavigate();


    const handleClick=async()=>{
        localStorage.clear();
        navigate("/login");
    }
    const handleSearch=()=>{
        setSearch('');
    }

    const handleNavClick = (navName) => {
        setActiveNav(navName);
      };
    const isNavActive = (navPath) => {
        return location.pathname === navPath ? 'active' : '';
      };
  return (
    <Container>
        <Content>
            <Logo>
                <a onClick={()=>navigate('/')} style={{cursor:'pointer'}}>
                    <img src="/images/home.png" alt="" />
                </a>
            </Logo>
            
            <Nav>
                <NavListWrap>
                <NavList
          className={isNavActive('/')} // Check if the current URL is '/'
          onClick={() => handleNavClick('Home')}
        >
          <Link to="/">
           
            <h2>{user?.firstName}</h2>
          </Link>
        </NavList>
       

                    <User>
                        <a onClick={handleClick}>
                            
                           
                            <span>
                            <i class="fa-solid fa-right-from-bracket"></i>
                            </span>
                        </a>
                        
                      
                        
                        <SignOut >
                            <a>Sign Out</a>
                        </SignOut>
                    </User>
                    
                   
                </NavListWrap>
            </Nav>
            </Content>
           
      
    </Container>
  )
}

const Container=styled.div`
    background-color: white;
    border-bottom:1px solid rgba(0,0,0,0.08);
    left:0;
    padding:0 24px;
    top:0;
    width:100vw;
    z-index:100;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Content=styled.div`
    
display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
            align-items:center;
    margin:0 auto;
    min-height:100%;
    max-width: 1128px;
`;

const Logo=styled.div`
margin-right:8px;
font-size: 8px;
cursor: pointer;
img{
    height:70px;
    width:70px;
    cursor: pointer;
}
`;

const Search=styled.div`
    
opacity:1;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
            flex-grow: 1;
    position:relative;
    &>div{
        max-width: 200px;
        input{
            border:none;
            -webkit-box-shadow:none;
                    box-shadow:none;
            background-color:#eef3f8;
            border-radius: 2px;
            color:rgba(0,0,0,0.9);
            width:218px;
            padding:0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size:14px;
            height:34px;
            border-color:#dce6f1;
            vertical-align:text-top;
            
        }
    }
`;

const SearchIcon=styled.div`
   
 width:40px;
    position:absolute;
    z-index:1;
    top:10px;
    left:2px;
    border-radius:0 2px 0 2px;
    margin:0;
    pointer-events: none;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align:center;
    -ms-flex-align:center;
            align-items:center;
    
    `;

const Nav=styled.div`
   
 margin-left:auto;
    display: block;
    
    @media (max-width:768px){
        position: fixed;
        left:0;
        bottom:0;
        background: white;
        width:100%;
        z-index:999;
        /* background-color: red; */
        
    }
`;

const NavListWrap=styled.ul`
   
 display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:nowrap;
        flex-wrap:nowrap;
    list-style-type:none;
    /* background-color: green; */

    .active{
        span:after{
            content:"";
            -webkit-transform: scaleX(1);
                -ms-transform: scaleX(1);
                    transform: scaleX(1);
            border-bottom: 2px solid var(--white,#fff);
            bottom:0;
            left:0;
            position:absolute;
            -webkit-transition:-webkit-transform 0.2s ease-in-out;
            transition:-webkit-transform 0.2s ease-in-out;
            -o-transition:transform 0.2s ease-in-out;
            transition:transform 0.2s ease-in-out;
            transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
            width:100%;
            border-color: rgba(0,0,0,0.9);


        }
    }
    @media (max-width:768px) {
        width: 90%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
            justify-content: space-around;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    }
`;

const NavList=styled.li`
   
 display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -ms-flex-align:center;
            align-items:center;
    cursor: pointer;
    

    a{
        -webkit-box-align:center;
            -ms-flex-align:center;
                align-items:center;
        background:transparent;
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        font-size:12px;
        font-weight:400;
        -webkit-box-pack:center;
            -ms-flex-pack:center;
                justify-content:center;
        line-height:1;
        min-height:42px;
        min-width:88px;
        position:relative;
        text-decoration: none;
        cursor: pointer;
        /* background-color: blue; */
        img{
            height: 20px;
            width: 20px;
        }

        span{
            color: rgba(0,0,0,0.5);
            

            display: -webkit-box;
            

            display: -ms-flexbox;
            

            display: flex;
            -webkit-box-align:center;
                -ms-flex-align:center;
                    align-items:center;
            -ms-flex-pack:distribute;
                justify-content:space-around;
        }

       
        
        }
        &:hover,
        &:active{
            a{
                span{
                    color:rgba(0,0,0,0.9)
                }
            }

    } 
    @media (max-width:768px){
     a{
        min-width: 20px;
     }   
    }
   
`;

const Profile=styled.div`
    

position:absolute;
    top:45px;
    background: white;
    border-radius: 0 0 5px 5px;
    width:100px;
    height:40px;
    font-size: 16px;
    -webkit-transition-duration: 167ms;
    -o-transition-duration: 167ms;
            transition-duration: 167ms;
    text-align: center;
    display: none;
    @media(max-width:768px){
        top:-20px;
        right:5px;
    }
`;

const SignOut=styled.div`
   
 position:absolute;
    top:80px;
    background: white;
    border-radius: 0 0 5px 5px;
    width:100px;
    height:40px;
    font-size: 16px;
    -webkit-transition-duration: 167ms;
    -o-transition-duration: 167ms;
            transition-duration: 167ms;
    text-align: center;
    display: none;
    @media(max-width:768px){
        top:-50px;
        right:5px;
    }
`;

const User=styled(NavList)`
    
a>svg{
        width:24px;
        border-radius:20%
    }

    a>img{
        width:24px;
        height:24px;
        border-radius:50%;
    }

    span{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;;
        -webkit-box-align:center;;
            -ms-flex-align:center;;
                align-items:center;
    }
    &:hover{
        ${Profile}{
           
 -webkit-box-align:center;
            -ms-flex-align:center;
            align-items:center;
            display:-webkit-box;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
                    justify-content: center;
        }
        ${SignOut}{
            
 -webkit-box-align:center;
            -ms-flex-align:center;
            align-items:center;
            display:-webkit-box;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
                    justify-content: center;
        }
    }

    i{
        font-size: 28px;
    }
`;

const Work=styled(User)`
border-left:1px solid rgba(0,0,0,0.8);
`;



export default Header
