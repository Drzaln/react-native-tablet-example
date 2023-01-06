import React from 'react';
import {View, SafeAreaView, Text, ScrollView, Pressable} from 'react-native';
import {
  CommonActions,
  createNavigatorFactory,
  TabRouter,
  useNavigationBuilder,
} from '@react-navigation/native';

// Custom Navigator Sidebar
const SidebarNavigator = ({initialRouteName, children, screenOptions}) => {
  const {state, navigation, descriptors, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <CustomSidebar
            state={state}
            navigation={navigation}
            descriptor={descriptors}
          />
          <View style={{flex: 1}}>
            {/* <Navbar /> */}
            <View style={{flex: 1}}>
              {state.routes.map((route, i) => {
                return (
                  <View
                    key={route.key}
                    style={{
                      display: i === state.index ? 'flex' : 'none',
                      flex: 1,
                    }}>
                    {descriptors[route.key].render()}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NavigationContent>
  );
};

export const createSidebarNavigator = createNavigatorFactory(SidebarNavigator);

const CustomSidebar = ({state, navigation, descriptor}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [show, setShow] = React.useState(false);
  // const dispatch = useDispatch<AppDispatch>();

  const onLogout = async () => {
    onClose();
    setDefaultAuthJwtSales('');
    await destroyAccessToken();
    dispatch(setMenuList([]));
    dispatch(setIsLogin(false));
    dispatch({type: 'USER_LOGOUT'});
  };

  const onClose = () => setShow(false);

  const cancelRef = React.useRef(null);

  return (
    <View
      style={{
        paddingVertical: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '20%',
      }}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            marginBottom: 12,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 12,
          }}>
          <View style={{backgroundColor: 'red', padding: 8}}>
            <Text size={32} centered>
              M
            </Text>
          </View>
          {/* {expanded ? (
            <Image
              alt="Makita"
              resizeMode="contain"
              source={images.MAKITA_LOGO}
            />
          ) : (
            <View style={{backgroundColor: COLOR.RED, padding: 8}}>
              <Text
                size={32}
                family={FontFamily.Montserrat_SemiBold}
                color={COLOR.TEXT_WHITE}
                centered>
                M
              </Text>
            </View>
          )} */}
        </View>
        {/* <IconButton
          alignSelf={expanded ? 'flex-end' : 'center'}
          onPress={() => {
            LayoutAnimation.configureNext({
              duration: 200,
              create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleX,
              },
              update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.7,
              },
            });
            setExpanded(!expanded);
          }}
          icon={
            <Icon
              as={<AntDesign name={expanded ? 'doubleleft' : 'doubleright'} />}
            />
          }
        /> */}
        <View
          style={{
            height: 1,
            margin: 12,
            backgroundColor: 'blue',
            alignSelf: 'stretch',
          }}
        />
        <ScrollView
          contentContainerStyle={{
            alignItems: 'flex-start',
            paddingHorizontal: 16,
          }}>
          {state.routes.map((route, i) => {
            const {name, key} = route;
            const {icon, title} = descriptor[route.key].options;
            return (
              <Pressable
                key={route.key}
                style={{
                  width: '100%',
                  marginVertical: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: key,
                    canPreventDefault: true,
                    data: {
                      isAlreadyFocused: key === state.routes[state.index].key,
                    },
                  });

                  if (!event.defaultPrevented) {
                    navigation.dispatch({
                      ...CommonActions.navigate({name, merge: true}),
                      target: state.key,
                    });
                    // setExpanded(false);
                  }
                }}>
                <Text style={{color: i === state.index ? 'red' : 'black'}}>
                  {title}
                </Text>
                {/* <Image
                  alt="icon-sidebar"
                  style={{
                    tintColor:
                      i === state.index ? COLOR.PRIMARY : COLOR.TEXT_GREY,
                  }}
                  resizeMode="contain"
                  source={icon}
                /> */}
                {/* {expanded && (
                  <NBText
                    ml="2"
                    style={{
                      color:
                        i === state.index ? COLOR.PRIMARY : COLOR.TEXT_GREY,
                    }}>
                    {title}
                  </NBText>
                )} */}
              </Pressable>
            );
          })}
        </ScrollView>
        <View
          style={{
            height: 1,
            margin: 12,
            backgroundColor: 'blue',
            paddingHorizontal: 8,
            alignSelf: 'stretch',
          }}
        />
        <Pressable
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: -4,
          }}
          onPress={() => setShow(true)}>
          {/* <Image alt="logout" source={images.LOGOUT} /> */}
          {/* {expanded && (
            <NBText ml="2" color="primary.600">
              Log Out
            </NBText>
          )} */}
        </Pressable>
      </View>
      {/* <AlertDialog leastDestructiveRef={cancelRef} isOpen={show}>
        <AlertDialog.Content>
          <AlertDialog.Header>Log Out</AlertDialog.Header>
          <AlertDialog.Body>Are you sure to logout ?</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="outline" ref={cancelRef} onPress={onClose}>
                No
              </Button>
              <Button onPress={() => onLogout()}>Yes</Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog> */}
    </View>
  );
};
