import React, { useState, useEffect, useRef, useContext } from "react";
import {
    View,
    Text,
    Button, StyleSheet,
    DrawerLayoutAndroid, Image, TouchableOpacity, Modal, BackHandler, Alert, Dimensions, TouchableHighlight
} from "react-native";
import { SitesList } from './SitesList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Divider } from "react-native-paper";
import Tooltip from 'react-native-walkthrough-tooltip';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect } from '@react-navigation/native';




const HomeScreen = (props) => {

    // useBackHandler(() => {
    //     // if (shouldBeHandledHere) {
    //     RNExitApp.exitApp();
    //     console.log("backk presssssssss")
    //     //   // handle it
    //     //   return true
    //     // }
    //     // // let the default thing happen
    //     // return false
    // })

    const [Notification, setNotification] = useState(true);
    console.log("propppssssss", props);
    const drawer = useRef(null);
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>

            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );

    const [dbusername, setdbUsername] = useState('');


    
   


    useEffect(() => {
        // getData()
    }, []);

    // useFocusEffect(() => {
    //     getData();
    //     BackHandler.addEventListener("hardwareBackPress", backAction);
    //     return () =>
    //         BackHandler.removeEventListener("hardwareBackPress", backAction);
    // }, [])

   


    
    const [Tooltipp, setTooltipp] = useState(false);
    return (
        <DrawerLayoutAndroid
            style={{ backgroundColor: '#FFFFFF' }}
            ref={drawer}
            drawerWidth={300}
            drawerPosition={"right"}
            renderNavigationView={navigationView}
        >

          
            {/* **************************************************** */}

            <View style={{ flex: 1 }}>
                {/* //Header section start  */}
                <View style={{ felx: 1, flexDirection: 'row', backgroundColor: "#FFFFFF" }} >

                    <View style={styles.HeaderStyle}>

                        <Tooltip
                            contentStyle={{ marginTop: '25%', backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#D0D5DD', width: '130%', paddingVertical: '10%' }}
                            isVisible={Tooltipp}
                            backgroundColor={'rgba(0,0,0,0.2)'}
                            content={

                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: '5%' }}>
                                    <Divider style={{ backgroundColor: '#D0D5DD', width: '130%', height: 1, marginTop: '5%', marginLeft: '-10%' }} />
                                    {/* <TouchableOpacity onPress={() => { props.navigation.navigate('ProfilAyarlarii'); setTooltipp(false); drawer.current.closeDrawer() }} style={{ padding: '2%', marginTop: '5%', width: '100%' }}><Text allowFontScaling={false} style={{ color: '#000000', fontFamily: "Poppins-Regular", fontSize: 14 }} >Profil Ayarları</Text></TouchableOpacity> */}
                                    {/* <TouchableOpacity style={{ padding: '2%', width: '100%' }}><Text allowFontScaling={false} style={{ color: '#D0D5DD', fontFamily: "Poppins-Regular", fontSize: 14 }}>Planını Güncelle</Text></TouchableOpacity> */}
                                    {/* <TouchableOpacity onPress={() => { props.navigation.navigate('Destek'); setTooltipp(false); drawer.current.closeDrawer() }} style={{ padding: '2%', width: '100%' }}><Text allowFontScaling={false} style={{ color: '#000000', fontFamily: "Poppins-Regular", fontSize: 14 }}>Destek</Text></TouchableOpacity> */}
                                    <TouchableOpacity onPress={() =>BackHandler.exitApp()} style={{ padding: '2%', width: '100%', flexDirection: 'row', marginTop: '5%' }}>
                                        <Text allowFontScaling={false} style={{ color: '#000000', fontFamily: "Poppins-Regular", fontSize: 14 }}>Exit</Text>
                                        <MaterialCommunityIcons name="location-exit" size={16} color={'#000000'} style={{ marginLeft: '2%', marginTop: '2%' }} />
                                    </TouchableOpacity>


                                </View>}
                            placement="top"
                            onClose={() => setTooltipp(false)}
                        >
                            <TouchableOpacity onPress={() => setTooltipp(true)} style={{
                                marginTop: '12%',
                                width: '90%',
                                height: '73%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginLeft: '17%'
                            }}>
                                <View style={{
                                    borderRadius: 37 / 2,
                                    borderWidth: 3,
                                    borderColor: '#F2F4F7',
                                    height: '100%',
                                    backgroundColor: '#D6BBFB'
                                    , width: 37, height: 37,
                                    justifyContent: 'center'

                                }}>
                                    <Text allowFontScaling={false} style={{ color: '#475467', alignSelf: 'center', fontFamily: "Poppins-Regular" }}>OR</Text>

                                </View>
                                {/* //bajبج */}
                                <View style={{
                                    marginBottom: '-30%', marginLeft: '-12%',
                                    width: 15, height: 15, borderRadius: 15 / 2
                                    , backgroundColor: '#12B76A', borderWidth: 2, borderColor: '#ffffff'
                                }}
                                ></View >
                                <AntDesign name="down" size={15} color="#98A2B3" style={{ marginLeft: '4%', display: Tooltipp ? 'none' : 'flex' }} />
                                {/* <AntDesign name="up" size={15} color="#98A2B3" style={{ marginLeft: '4%', display: Tooltipp ? 'flex' : 'none',zIndex:9999 }} /> */}
                            </TouchableOpacity>
                        </Tooltip>
                        {/* <OptionsMenu
                            customButton={
                                <View style={{
                                marginTop: '8%',
                                width: '100%',
                                height: '73%',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    borderRadius: 37/2,
                                    borderWidth: 3,
                                    borderColor: '#F2F4F7',
                                    height: '100%',
                                    marginTop: '12%',
                                    backgroundColor:'#D6BBFB'
                                    ,width:37,height:37,
                                    justifyContent:'center'

                                }}>
                                     <Text allowFontScaling={false}  style={{color:'#475467',alignSelf:'center',fontFamily: "Poppins-Regular"}}>OR</Text>
                               
                                </View>
                                <AntDesign name="down" size={15} color="#98A2B3" style={styles.downIcon} />
                            </View>}
                            options={["LogOut"]}
                            actions={[LogOut]}

                        /> */}
                    </View>

                    <TouchableOpacity
                    onPress={() => {drawer.current.openDrawer()}}
                    >
                        {/* //bajبج */}
                        <View style={{
                            marginTop: 20, marginLeft: 10, marginBottom: -10,
                            width: 8, height: 8, borderRadius: 2
                            , backgroundColor: 'transparent'
                        }}
                        ></View >

                        <View style={{
                            marginRight: '4%', paddingBottom: 8
                        }}>
                           <MaterialIcons name="notifications-none" size={27} color="#101828"/>
                        </View>
                        {/* <MaterialIcons name="notifications-none" size={27} color="#101828" style={{
                            marginRight: '4%', paddingBottom: 20,
                            // transform: [{ rotate: '345deg' }]
                        }}  ></MaterialIcons> */}
                    </TouchableOpacity>
                    {/* <Modal visible={OpenNotifModal}>

                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row', marginTop: '50%' }}>
                            <TouchableOpacity onPress={() => setOpenNotifModal(false)}>
                                <AntDesign name="close" size={18} />
                            </TouchableOpacity>
                            <Text allowFontScaling={false} style={{ fontSize: 18 }}>Notification</Text>
                        </View>

                    </Modal> */}

                </View>
                <Divider style={{ backgroundColor: '#EAECF0', height: 0.5, width: '100%', justifyContent: 'center' }} />
                {/* Header section end  */}
                {/* <WebviewHeader /> */}

                {/* <View style={[styles.webViewStyle, { display: nonedisplayView ? 'flex' : 'none' }]}>
                    <AntDesign name="close" size={15} color="#FFFF" style={styles.WEBiCONstyle} onPress={() => setnonedisplayView(false)} />
                    <Text allowFontScaling={false} style={styles.webViewTxtStyle}>{`
Sitenizi düzenlemek ve yaratiriciniz deneyimlemek için
masaüstünüzden w3yz.com’a gidin
`}</Text>

                </View> */}


                <View style={{
                    display: Notification ? 'flex' : 'none',
                    backgroundColor: '#FFFFFF', width: '90%', height: '12%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: '3%',
                    borderColor: '#D0D5DD', borderWidth: 1, borderRadius: 4
                }}>
                    <View style={{ flexDirection: 'row', height: '100%', width: '100%' }}>
                        <View style={{ height: '100%', backgroundColor: '#F9FAFB', width: '20%', justifyContent: 'center', alignItems: 'flex-end' }}>
                            {/* <Image source={require('../assets/images/W.png')} /> */}
                        </View>
                        <View style={{ height: '100%', width: '100%' }}>
                            <View style={{ height: '35%', width: '80%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: '2%' }}>
                                <Text allowFontScaling={false} style={{ fontSize: 14, fontFamily: "Poppins-Regular", fontWeight: '800', color: '#101828', marginRight: '55%', marginLeft: '7%' }}>Notification!</Text>
                                <TouchableOpacity style={{ height: '90%', width: '15%', marginTop: '1%' }} onPress={() => setNotification(false)}><MaterialIcons name="close" color={'#101828'} size={22} /></TouchableOpacity>
                            </View>
                            <Text allowFontScaling={false} style={{ marginLeft: '5%', color: '#667085', fontSize: 12, fontFamily: "Poppins-Regular" }}>{`My Notification is here!!`}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ display: Notification ? 'none' : 'flex' }}>

                    <Text allowFontScaling={false} style={{ fontFamily: "Poppins-Regular", fontSize: 25, color: "#1E0345", marginLeft: '5.5%', marginTop: "7%" }} numberOfLines={1}>
                        Hello! {dbusername}
                    </Text>
                    <Text allowFontScaling={false} style={{ fontFamily: "Poppins-Regular", fontSize: 16, color: "#1E0345", marginLeft: '6%' }}>
                        Welcome
                    </Text>
                </View>
                <View style={{ fontFamily: "Poppins-Regular", flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <SitesList {...props} />

                </View>




            </View>

        </DrawerLayoutAndroid>

    )
}


const styles = StyleSheet.create({
    HeaderStyle: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFF'
    },
    downIcon: {
        marginTop: 25,
        marginLeft: "2%",
    },
    notifIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 22,

    },
    imageStyle: {
        alignItems: 'flex-end',
        width: 107,
        height: 40,

        marginLeft: 30,
        marginTop: 20

    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    },
    HeaderStyle: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFF'
    },
    downIcon: {

        // marginLeft: '2%',
    },
    notifIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 22,

    },
    imageStyle: {
        alignItems: 'flex-end',
        width: 107,
        height: 40,

        marginLeft: 30,
        marginTop: 20

    },
    avatarStyle: {
        backgroundColor: '#ffffff',
        width: 28,
        height: 28,
        borderRadius: 30
    },
    webViewStyle: {
        flex: 1 / 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '8%',
        backgroundColor: '#1E0345',



    },
    webViewTxtStyle: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 12,
        marginBottom: 13,
        marginRight: 5,
        fontFamily: "Poppins-Regular",
    },
    WEBiCONstyle: {
        marginLeft: '90%',
        marginBottom: 10


    },
    ExitRows: {
        width: '100%',
        height: '26%',
        borderTopWidth: 1,
        borderTopColor: '#D0D5DD',
        borderBottomWidth: 1,
        borderBottomColor: '#D0D5DD',
        justifyContent: 'center',
        alignItems: 'center'
    }


});
export { HomeScreen };