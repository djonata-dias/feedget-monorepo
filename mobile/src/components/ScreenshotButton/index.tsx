import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { styles } from './styles';
import { theme } from '../../theme';
import { Camera, Trash } from 'phosphor-react-native';

interface IScreenshotButtonProps {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeScreenshot, onRemoveScreenshot }: IScreenshotButtonProps) {
  console.log('ScreenshotButton', screenshot);
  return (<TouchableOpacity
    style={styles.container}
    onPress={!screenshot ? onTakeScreenshot : onRemoveScreenshot}
  >

    {screenshot ?
      (<View >
        <Image
          style={styles.image}
          source={{ uri: `data:image/png;base64, ${screenshot.toString()}` }}
        />
        <Trash size={18}
          color={theme.colors.text_secondary}
          weight="fill"
          style={styles.trash}
        />
      </View>) :
      (<Camera
        size={24}
        color={theme.colors.text_secondary}
        weight="bold"
      />)
    }

  </TouchableOpacity>
  );
}