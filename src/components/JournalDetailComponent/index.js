import {
  Image,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import Pdf from 'react-native-pdf';
import Orientation from 'react-native-orientation-locker';
import styles from './styles';
import JIcon from '../common/JIcon';
import colors from '../../assets/themes/colors';
const WIN_WIDTH = Dimensions.get('window').width;
const WIN_HEIGHT = Dimensions.get('window').height;

export default class JournalDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      scale: 1,
      numberOfPages: 0,
      horizontal: false,
      orianted: false,
      width: WIN_WIDTH,
      inputPageNumber: 1,
    };
    this.pdf = null;
    this.pageInputRef = React.createRef();
  }

  _onOrientationDidChange = orientation => {
    if (orientation == 'LANDSCAPE-LEFT' || orientation == 'LANDSCAPE-RIGHT') {
      this.setState({
        width: WIN_HEIGHT, // > WIN_WIDTH ? WIN_HEIGHT : WIN_WIDTH,
        orianted: true,
      });
    } else {
      this.setState({
        //width: WIN_HEIGHT > WIN_WIDTH ? WIN_HEIGHT : WIN_WIDTH,
        width: WIN_WIDTH,
        orianted: false,
      });
    }
  };
  componentDidMount() {
    Orientation.addOrientationListener(this._onOrientationDidChange);
  }
  componentWillUnmount() {
    Orientation.removeOrientationListener(this._onOrientationDidChange);
  }
  switchHorizontal = () => {
    this.setState({horizontal: !this.state.horizontal, page: this.state.page});
  };
  onChangePageNumber = number => {
    this.setState({inputPageNumber: number});
  };
  changePage = () => {
    this.pdf.setPage(Number(this.state.inputPageNumber));
  };
  setPageToTop = () => {
    this.pdf.setPage(1);
  };
  render() {
    const {fileName} = this.props.route.params.journal;
    const source = {
      uri: `bundle-assets://path/to/${fileName}.pdf`,
      cache: true,
    };

    return (
      <SafeAreaView style={styles.container}>
        {!this.state.orianted && (
          <View
            style={{
              flexDirection: 'row',
              width: WIN_WIDTH,
              justifyContent: 'space-between',
              backgroundColor: colors.white,
            }}>
            <View style={styles.pageInputContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: colors.pageInputColor}}>Sayfa No:</Text>
                <TextInput
                  keyboardType="numeric"
                  //placeholder="Sayfaya No giriniz"
                  placeholderTextColor={colors.danger}
                  color={colors.pageInputColor}
                  style={styles.pageInput}
                  onChangeText={this.onChangePageNumber}
                  value={String(this.state.inputPageNumber)}
                  defaultValue={null}
                  onSubmitEditing={this.changePage}
                  maxLength={2}
                />
              </View>
              <TouchableOpacity onPress={this.setPageToTop}>
                <JIcon
                  type="MaterialIcons"
                  name="home"
                  color={colors.pageInputColor}
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.switchHorizontal}>
              <JIcon
                type="MaterialIcons"
                name="rotate-90-degrees-ccw"
                size={30}
                style={{padding: 5}}
                color={colors.pageInputColor}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={{flex: 1, width: this.state.width}}>
          <Pdf
            ref={pdf => {
              this.pdf = pdf;
            }}
            style={styles.pdf}
            source={source}
            scale={this.state.scale}
            horizontal={this.state.horizontal}
            onLoadComplete={numberOfPages => {
              this.setState({
                numberOfPages: numberOfPages,
              });
            }}
            onPageChanged={(page, numberOfPages) => {
              this.setState({
                page: page,
                inputPageNumber: page,
              });
            }}
            onError={error => {
              console.log(error);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
