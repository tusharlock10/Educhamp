// author - Tushar Jain
// contact - 9354527144
// email - tusharlock10@gmail.com
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {FONTS, COLORS, IMAGES} from './constants';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LG from 'react-native-linear-gradient'; // linear gradient component
import {FlatList} from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width; // defined screen width

const DATA1 = [
  // data for tab 1
  {uri: IMAGES.IMAGE1, title: '20 Lance Court'},
  {uri: IMAGES.IMAGE2, title: '12 Mercer Rd'},
  {uri: IMAGES.IMAGE3, title: '80 Orrong Rd'},
  {uri: IMAGES.IMAGE4, title: '140 Kooyong'},
  {uri: IMAGES.IMAGE5, title: '78 Hammerback'},
];

const DATA2 = [
  // data for tab 2
  {uri: IMAGES.IMAGE3, title: '20 Lance Court'},
  {uri: IMAGES.IMAGE1, title: '12 Mercer Rd'},
  {uri: IMAGES.IMAGE5, title: '80 Orrong Rd'},
  {uri: IMAGES.IMAGE7, title: '140 Kooyong'},
  {uri: IMAGES.IMAGE4, title: '78 Hammerback'},
  {uri: IMAGES.IMAGE8, title: '12 Mercer Rd'},
  {uri: IMAGES.IMAGE2, title: '80 Orrong Rd'},
];

const DATA3 = [
  // data for tab 3
  {uri: IMAGES.IMAGE9, title: '20 Lance Court'},
  {uri: IMAGES.IMAGE2, title: '12 Mercer Rd'},
];

// description to be used
const LONG_TEXT =
  "\
Julian is widely as one of Australia's leading estate agents and specialists\
in selling prestiege homes and luxury developments. Her intellect, market knowledge\
and dedication combined with the support of her team, ensure her clients, are provided\
with a world class real estate experience.";

const Card = ({title, uri}) => {
  // card component which is an Image with text on bottom right
  return (
    <TouchableOpacity
      style={{
        height: SCREEN_WIDTH / 3 - 2,
        width: SCREEN_WIDTH / 3 - 2,
        margin: 1,
      }}
      onPress={() => {
        Alert.alert('About this estate', 'This estate is called : ' + title);
      }}>
      <Image style={{flex: 1}} source={{uri}}>
        <LG
          style={{flex: 1, justifyContent: 'flex-end', padding: 5}}
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)']}>
          {/* Linear gradient is applied to blacken the bottom a bit so that text can be seen easily */}
          <Text
            style={{
              fontFamily: FONTS.PRODUCT_SANS_BOLD,
              fontSize: 14,
              color: 'white',
            }}>
            {title}
          </Text>
        </LG>
      </Image>
    </TouchableOpacity>
  );
};

const ActivePropertiesRoute = () => (
  // This is the component which is seen on tab 1
  <FlatList
    data={DATA1}
    renderItem={({item}) => <Card title={item.title} uri={item.uri} />}
    numColumns={3}
    keyExtractor={(item, index) => index.toString()}
  />
);

const DraftsRoute = () => (
  // This is the component which is seen on tab 2
  <FlatList
    data={DATA2}
    renderItem={({item}) => <Card title={item.title} uri={item.uri} />}
    numColumns={3}
    keyExtractor={(item, index) => index.toString()}
  />
);

const ExpiredRoute = () => (
  // This is the component which is seen on tab 3
  <FlatList
    data={DATA3}
    renderItem={({item}) => <Card title={item.title} uri={item.uri} />}
    numColumns={3}
    keyExtractor={(item, index) => index.toString()}
  />
);

export default class Main extends Component {
  state = {
    index: 0, // index of current tab
    routes: [
      // keys and title of tabs
      {key: 'active_properties', title: 'Active Properties'},
      {key: 'drafts', title: 'Drafts'},
      {key: 'expired', title: 'Expired'},
    ],
  };

  renderHeader() {
    // fuction to render the header component
    return (
      <View style={styles.HeaderStyle}>
        <Icon
          name="arrow-left"
          size={24}
          color={COLORS.DARK}
          onPress={() => {
            Alert.alert('Back Button', 'You have pressed the back button');
          }}
        />
        <Text style={styles.HeaderText}>Agent Profile</Text>
        {/* View added and given width 24 to have text in center */}
        <View style={{width: 24}} />
      </View>
    );
  }

  renderProfile() {
    // profile component which contains image and info about the person
    return (
      <View style={styles.ProfileStyle}>
        <View
          style={{
            height: 128,
            width: 128,
            borderRadius: 100,
            backgroundColor: 'white',
            elevation: 10,
          }}>
          <Image
            style={{flex: 1, borderRadius: 100}}
            source={{uri: IMAGES.PROFILE_IMAGE}}
          />
        </View>

        <View style={{flex: 2, marginHorizontal: 15}}>
          <Text
            style={{
              fontFamily: FONTS.RALEWAY,
              fontSize: 18,
              color: COLORS.GRAY,
              padding: 3,
            }}>
            Tushar Jain
          </Text>
          <Text
            style={{
              fontFamily: FONTS.RALEWAY,
              fontSize: 14,
              color: COLORS.GRAY,
              padding: 3,
            }}>
            Senior Partner
          </Text>
          <Text
            style={{
              fontFamily: FONTS.RALEWAY_BOLD,
              fontSize: 14,
              color: COLORS.DARK,
              padding: 3,
            }}>
            845 Followers
          </Text>
          <TouchableOpacity
            style={styles.EditButtonStyle}
            onPress={() => {
              Alert.alert('Edit Pressed', 'You have pressed the edit button');
            }}>
            <Text
              style={{
                fontFamily: FONTS.PRODUCT_SANS,
                color: COLORS.DARK,
                fontSize: 16,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}} />
      </View>
    );
  }

  renderContact() {
    // the component with address and buttons for calling and messaging
    return (
      <View style={styles.ContactViewStyle}>
        <View style={{flex: 1.2, paddingHorizontal: 10}}>
          <Text
            style={{
              fontFamily: FONTS.RALEWAY,
              fontSize: 20,
              color: COLORS.DARK,
            }}>
            RT Edgar - Toorak
          </Text>
          <Text
            style={{
              fontFamily: FONTS.PRODUCT_SANS,
              fontSize: 14,
              color: COLORS.GRAY,
            }}>
            10 Wallace Avenue Toorak Vic 3142
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name="message-square"
              onPress={() => {
                Alert.alert(
                  'Message Pressed',
                  'You have pressed the message button',
                );
              }}
              size={22}
              style={styles.ContactIconStyle}
              color={COLORS.LESS_DARK}
            />
            <Text
              style={{
                fontFamily: FONTS.PRODUCT_SANS,
                fontSize: 14,
                color: COLORS.DARK,
              }}>
              Message
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name="phone"
              onPress={() => {
                Alert.alert('Call Pressed', 'You have pressed the call button');
              }}
              size={22}
              style={styles.ContactIconStyle}
              color={COLORS.LESS_DARK}
            />
            <Text
              style={{
                fontFamily: FONTS.PRODUCT_SANS,
                fontSize: 14,
                color: COLORS.DARK,
              }}>
              Call
            </Text>
          </View>
        </View>
      </View>
    );
  }

  renderDescription() {
    // a description about the company
    return (
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text
          style={{
            fontFamily: FONTS.PRODUCT_SANS,
            fontSize: 14,
            color: COLORS.DARK_GRAY,
            textAlign: 'justify',
          }}>
          {LONG_TEXT}
        </Text>
      </View>
    );
  }

  renderTabView() {
    // the component with 3 tabs and the Card component below it
    return (
      <TabView
        // tab view component
        navigationState={this.state}
        renderScene={SceneMap({
          active_properties: ActivePropertiesRoute,
          drafts: DraftsRoute,
          expired: ExpiredRoute,
        })}
        renderTabBar={props => (
          <TabBar
            // the tab component which contains the 3 tabs
            {...props}
            onTabLongPress={({route}) => {
              props.jumpTo(route.key);
            }}
            indicatorStyle={{backgroundColor: '#ff4081', marginBottom: 2}}
            style={{
              backgroundColor: 'white',
              elevation: 0,
              borderBottomWidth: 1,
              borderColor: COLORS.GRAY,
              margin: 3,
            }}
            renderLabel={text => {
              if (text.focused) {
                return (
                  <Text
                    style={{
                      fontFamily: FONTS.PRODUCT_SANS,
                      fontSize: 12,
                      color: COLORS.DARK_GRAY,
                    }}>
                    {text.route.title}
                  </Text>
                );
              } else {
                return (
                  <Text
                    style={{
                      fontFamily: FONTS.PRODUCT_SANS,
                      fontSize: 12,
                      color: COLORS.GRAY,
                    }}>
                    {text.route.title}
                  </Text>
                );
              }
            }}
          />
        )}
        swipeEnabled={true}
        onIndexChange={index => this.setState({index})}
        initialLayout={{width: SCREEN_WIDTH}}
      />
    );
  }

  render() {
    // main render function
    return (
      <View style={{flex: 1}}>
        {this.renderHeader()}
        <ScrollView>
          {this.renderProfile()}
          {this.renderContact()}
          {this.renderDescription()}
          {this.renderTabView()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  HeaderText: {
    fontFamily: FONTS.RALEWAY_LIGHT,
    fontSize: 22,
    color: COLORS.DARK,
  },
  ProfileStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
    backgroundColor: COLORS.LIGHT,
  },
  EditButtonStyle: {
    backgroundColor: COLORS.LIGHT_GRAY,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 7,
  },
  ContactViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.6,
    borderColor: COLORS.GRAY,
  },
  ContactIconStyle: {
    padding: 14,
    alignSelf: 'center',
    borderWidth: 1.2,
    borderColor: COLORS.LIGHT_GRAY,
    borderRadius: 30,
  },
});
