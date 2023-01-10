import React, { useRef, useState, useEffect, useContext } from "react";
import {
    View, StatusBar, FlatList, Dimensions, Animated, StyleSheet, TouchableOpacity,
    Image, Pressable, VirtualizedList, Alert, RefreshControl, Text, Linking, Modal, ActivityIndicator, Share
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Octicons from 'react-native-vector-icons/Octicons';
import OptionsMenu from "react-native-option-menu";

// animated va useref mokammele haman

// abaade screen ro migire ta ba estefade az una mahal va andazeye banner ro moshakhas kone
const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.5;

const SitesList = (props) => {

    const [NoSiteView, setNoSiteView] = useState(false);
    const [animating, setanimating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);




    // refreshcontrol const
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }


    const [dbusername, setdbUsername] = useState('');
    const [dbtoken, setdbToken] = useState('');
    const [dbUid, setdbUid] = useState('');
    const [dataArr, setDataArr] = useState([]);
    // const [userId, setUserId] = useState('');


    const getData = () => {
        (
                        axios.post('https://w3yz.com/api/mobile/mysites', { 
                            'uid': 1315
                        }).then(response => {
                            console.log('++++++++++++++++++++++++++++++++++++++');
                            console.log(response);
                            console.log(response.data.length);
                            if (response.data.length == 0) {
                                setNoSiteView(true);
                            }
                            else {
                                setDataArr(response.data);
                            }
                            setIsLoading(false);
                            setanimating(false);
                        
                        })
                            .catch(error => {
                                console.error('There was an error!', error);
                                setIsLoading(false);
                            })
        )
    }


    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'share this Site With...'
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    useEffect(() => {
        if (isLoading) {
            getData();
        }
    }, [dataArr])

    // scroll be surate y harekat kone
    const scrollY = useRef(new Animated.Value(0)).current;

    const [Status, setStatus] = useState('');

    const SiteyiAdlandir =(catid)=>{alert("1")};
    const SiteyiIzle =(catid)=>{alert(catid)};
    const SiteyiChaglat =(catid)=>{alert(catid)};
    const SiteyiKaldir =(catid)=>{alert("are u sure?")};

    return (

        <View style={{ backgroundColor: "#FFFFFF", justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: '2%' }} >

            {/* FLOATING BUTTON */}
            <View style={{ width: 70, height: 120, backgroundColor: 'transparent', zIndex: 99999, position: 'absolute', display: NoSiteView ? 'none' : 'flex' }}>
                <TouchableOpacity onPress={() => Alert.alert("this is floating button!")} style={{ width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: '#7F56D9', justifyContent: 'center', alignItems: 'center' }}>
                    <Octicons name="plus" color={"#ffffff"} size={30} />
                </TouchableOpacity>
            </View>


            <Modal
                visible={animating}
                transparent={true}
                opacity={0.2}
                style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', opacity: 0.2 }}>

                <ActivityIndicator
                    visible={animating}
                    size={50}
                    color="#6018BB"
                    style={{ marginTop: '100%' }}
                >

                </ActivityIndicator>

            </Modal>


            {/* no site view  */}
            <View
                //  display: NoSiteView ? 'flex' : 'none',
                style={{ display: NoSiteView ? 'flex' : 'none', flex: 1, justifyContent: 'center', alignSelf: 'flex-start', marginLeft: '-17%', flexDirection: 'column', marginTop: '40%' }}>
                <Text allowFontScaling={false} style={{ fontSize: 20, fontWeight: '700', fontFamily: "Poppins-Regular", color: '#101828' }}>{`Henüz bir site oluşturmadınız,
birlikte web sitesi yapalım`}
                </Text>
                <Text allowFontScaling={false} style={{ color: '#667085', fontSize: 14, fontFamily: "Poppins-Regular", marginTop: '3%' }}>
                    {`Yeni bir site oluşturun ve ürünlerinizi
yönetmeye başlayın`}
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Templateler')} style={{ flexDirection: 'row', marginTop: '5%' }}>
                    <MaterialCommunityIcons name="plus" size={27} color={'#6018BB'} style={{ marginTop: '-1%', marginRight: '2%' }} />
                    <Text allowFontScaling={false} style={{ fontSize: 16, fontWeight: '600', color: '#6018BB' }}>Yeni site oluştur</Text>
                </TouchableOpacity>

            </View>
            {/* no site view  */}



            <FlatList
                style={{ display: NoSiteView ? 'none' : 'flex' }}
                //style={{ display: 'none' }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                data={dataArr}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => {
                    if (item.status == 0) { setStatus("Unpublished") } else { setStatus("Published") }
                    return (
                        <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{
                                width: ITEM_WIDTH, height: ITEM_HEIGHT, overflow: 'hidden', alignItems: 'center', marginTop: 10, marginBottom: 10, paddingBottom: '10%',
                                backgroundColor: '#FFFFFF'
                            }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Text allowFontScaling={false} style={styles.SiteNameText}>{item.title}</Text>
                                        {/* <MaterialCommunityIcons name="dots-vertical" size={25} color={'#98A2B3'} style={{marginLeft:'85%'}} onPress={onShare} /> */}
                                        <OptionsMenu
                                            customButton={<MaterialCommunityIcons name="dots-vertical" size={25} color={'#98A2B3'} style={{marginLeft:'2%',display:'none'}}  />}
                                            destructiveIndex={item.id}
                                            options={["Siteyi adlandır", "Siteyi ön İzle", "Siteyi çoğalt","Siteyi kaldır"]}
                                            actions={[SiteyiAdlandir,SiteyiIzle,SiteyiChaglat,SiteyiKaldir]}
                                        />
                                    </View>

                                    <View style={styles.ImageBorder}>
                                        <Image style={{
                                            width: 320, height: '90%', borderRadius: 4,

                                        }}
                                            source={{ uri: item.template_image }}
                                        >
                                        </Image>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '99%', marginRight: '-14%', marginTop: '2%' }}>

                                        <Text allowFontScaling={false} style={styles.txt1style}>{item.url}</Text>

                                        <Text allowFontScaling={false} style={styles.statusStyle}><Text allowFontScaling={false} style={{ color: '#9B9B9B' }}>Status{'   '}</Text >{Status}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: '95%', position: 'absolute', marginLeft: '-10%', justifyContent: 'space-between', width: '100%' }}>

                                    <TouchableOpacity
                                        onPress={() => Linking
                                            .openURL(item.url)
                                            .catch(err => console.error('Error', err))}

                                        style={styles.previewSite}>
                                        <Text allowFontScaling={false} style={{ fontFamily: "Poppins-Regular", color: '#344054' }}>Open Website Page</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.goDashboard}
                                        onPress={() => { props.navigation.navigate('Dashboard'), AsyncStorage.multiSet([['Sid', item.id + ""], ['Sitename', item.title], ['sitepic', item.template_image], ['siteURL', item.url], ['siteStatus', item.status + ""]]) }}
                                    >
                                        <Text allowFontScaling={false} style={{ fontFamily: "Poppins-Regular", color: '#FFFFFF' }}

                                        >Dashbarod</Text>

                                    </TouchableOpacity>

                                </View>

                            </View>


                        </View>
                    )
                }}
            >
            </FlatList>

        </View>

    )
}

const styles = StyleSheet.create({


    SiteNameText: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: "Poppins-Regular",
        color: '#101828',
        alignSelf:'flex-start',
        marginLeft:'-49%'
       
    },

    statusStyle: {
        allowFontScaling: false,
        fontSize: 13,
        fontFamily: "Poppins-Regular",
        color: '#1163FA',


    },
    txt1style: {
        allowFontScaling: false,
        fontSize: 13,
        fontFamily: "Poppins-Regular",
        color: '#9B9B9B',
        marginLeft:'2%'
    },
    loginStyle: {

        borderRadius: 4,
        backgroundColor: '#DFD0F1',
        marginTop: 15,
        padding: 6,
        width: '80%',
        height: 40,
        borderColor: '#1163FA',
        borderWidth: 1
    },
    goDashboard: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#7F56D9',
        width: '45%',
        height: '65%',
        borderColor: '#7F56D9',
        borderWidth: 1,
        marginRight: '8%'
    },
    previewSite: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        width: '45%',
        height: '65%',
        borderColor: '#D0D5DD',
        borderWidth: 1,
        marginLeft: '-1%'

    },
    ImageBorder: {
        width: ITEM_WIDTH,
        height: '70%',
        borderColor: '#D0D5DD',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center'
        , alignItems: 'center',
        marginTop: '3%',
        marginBottom: '5%'
    }
})

export { SitesList }