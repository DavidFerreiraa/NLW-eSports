import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as ClipBoard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface MyModalProps extends ModalProps{
    discord: string
    onClose: () => void
}

export function DuoMatch({discord, onClose, ...rest}: MyModalProps) {

    const [isCopping, setIsCopping] = useState<boolean>(false)

    async function handleCopyUserDiscord(){
        setIsCopping(true)
        await ClipBoard.setStringAsync(discord)
        Alert.alert("Discord copiado!","Discord copiado para a áreade transferência")
        setIsCopping(false)
    }

  return (
      <Modal transparent statusBarTranslucent animationType='fade' {...rest}>
          <View style={styles.container}>
              <View style={styles.content}>
                  <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                      <MaterialIcons
                          name="close"
                          size={20}
                          color={THEME.COLORS.CAPTION_500}
                      />
                  </TouchableOpacity>
                  <CheckCircle
                      size={64}
                      color={THEME.COLORS.SUCCESS}
                      weight="bold"
                  />
                  <Heading
                      title="Let's play!"
                      subtitle="Agora é só começar a jogar"
                      style={{ alignItems: "center", marginTop: 24 }}
                  />
                  <Text style={styles.label}>Adicione no discord</Text>
                  <TouchableOpacity style={styles.discordButton} onPress={handleCopyUserDiscord} disabled={isCopping}>
                      <Text style={styles.discordText}>{isCopping? <ActivityIndicator color={THEME.COLORS.PRIMARY}/>: discord}</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </Modal>
  );
}