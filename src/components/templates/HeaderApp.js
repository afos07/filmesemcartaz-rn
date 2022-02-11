import React, {useState} from 'react';

import {
    Text,
    View,
    StatusBar
} from 'react-native';

import styled from 'styled-components/native';


const MyHeaderApp = styled.View`
    background-color:${props => props.backgroundColor};
    height:60px;
    justify-content:center;
    align-items:center;
    // border-bottom-width:1px;
    // border-color:#;
`;

const TextHeader = styled.Text`
    font-weight:900;
    color:#222;
    font-size:20px;
`;

const RowHeader = styled.View`
    width:100%;
    flex:1;
    flex-direction:row;    
`;

const ColHeaderTitle = styled.View`
    flex:2;
    justify-content:center;
    margin-left:10px;
`;

const ColActionLeft = styled.View`
    flex:1;
    justify-content:center;
    align-items:space-between;
    margin-right:10px
`;

const IconLeft = styled.TouchableOpacity``;
const ImageIcon = styled.Image`
    width:20px;
    height:20px;
`;
const HeaderApp = (props)=>{
    const [backgroundHeader, setBackgroundHeader] = useState('#ff793f');
    return(
        <>
            <StatusBar backgroundColor={backgroundHeader} barStyle='dark-content'/>
            <MyHeaderApp backgroundColor={backgroundHeader}>
                <RowHeader>
                    <ColHeaderTitle>
                        <TextHeader>{props.title}</TextHeader> 
                    </ColHeaderTitle>
                    <ColActionLeft>
                        <IconLeft
                            onPress={()=> props.outra()}
                        >
                            <ImageIcon
                                source={require('./../../img/refresh.png')}
                            />
                        </IconLeft>
                    </ColActionLeft>
                </RowHeader>   
            </MyHeaderApp>  
        </>
    );
}
export default HeaderApp;