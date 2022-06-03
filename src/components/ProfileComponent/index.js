import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Input from '../Input';
import JIcon from '../common/JIcon/index';
import styles from '../Input/styles';
import JButton from '../common/JButton';
import colors from '../../assets/themes/colors';

export default class ProfileComponent extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.personIconView}>
          <JIcon
            name="person"
            type="Ionicons"
            size={100}
            style={styles.personIcon}
          />
        </View>
        <Input
          label="Ad:"
          placeholder="Lütfen adınızı giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'firstname', value: value})
          }
        />
        <Input
          label="Soyad:"
          placeholder="Lütfen soyadınızı giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'lastname', value: value})
          }
        />
        <Input
          label="Email:"
          placeholder="Lütfen email adresinizi giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'email', value: value})
          }
        />
        <Input
          label="Telefon:"
          placeholder="Lütfen telefon numaranızı giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'phone', value: value})
          }
        />
        <Input
          label="Bölüm:"
          placeholder="Lütfen bölümünüzü giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'department', value: value})
          }
        />
        <Input
          label="Mezuniyet Yılı:"
          placeholder="Lütfen mezuniyet yılınızı giriniz."
          keyboardType="numeric"
          maxLength={4}
          onChangeText={value =>
            this.props.onChangeText({type: 'gradyear', value: value})
          }
        />
        <Input
          label="Meslek:"
          placeholder="Lütfen mesleğinizi giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'job', value: value})
          }
        />
        <Input
          label="Firma:"
          placeholder="Lütfen çalıştığınız firmayı giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'companyname', value: value})
          }
        />
        <Input
          label="Ülke:"
          placeholder="Lütfen yaşadığınız ülkeyi giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'countryname', value: value})
          }
        />
        <Input
          label="Şehir:"
          placeholder="Lütfen yaşadığınız şehri giriniz."
          onChangeText={value =>
            this.props.onChangeText({type: 'cityname', value: value})
          }
        />
        <View>
          <JButton
            onPress={this.props.onSaveButtonPress}
            title="Kaydet"
            style={{
              backgroundColor: colors.darkBlue,
              margin: 20,
              height: 40,
              borderRadius: 5,
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
