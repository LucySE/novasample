import { Square, Circle } from '@tamagui/shapes'
import React from 'react'
import { XStack, Avatar, ScrollView, Button } from 'tamagui'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/Nova',
  })

  return (
   <><XStack backgroundColor="#cf2e2e" space="$10">
      <Avatar alignItems="flex-start" circular size="$8">
        <Avatar.Image accessibilityLabel="Nova 90s logo"
          src="https://static.mytuner.mobi/media/tvos_radios/bqj2xat3xckw.webp" />

      </Avatar>
      <Avatar {...linkProps}alignItems="center" circular size="$10">
        <Avatar.Image accessibilityLabel="Nova logo"
          src="https://images.squarespace-cdn.com/content/v1/60c1a6bea68b147617bcd0ae/0382ca52-a124-492c-b1b8-132132dd72d5/Brand+Tile-Nova+Nat.png?format=500w" />

      </Avatar>
      <Avatar alignItems="flex-end" circular size="$8">
        <Avatar.Image accessibilityLabel="Nova noughties logo" src="https://images.squarespace-cdn.com/content/v1/60c1a6bea68b147617bcd0ae/5fc76b03-f42a-4818-af3b-b02a62d23c4a/Brand+Tile-Nova+Noughties.png?format=500w" />
      </Avatar>




    </XStack><ScrollView maxHeight={700} width="75%" backgroundColor="$background" padding="$4" borderRadius="$4">
        <XStack flexWrap="wrap" alignItems="center" justifyContent="center">
          <Square margin="$4" size={120} backgroundColor="$red9" />
          <Circle margin="$4" size={120} backgroundColor="$orange9" />
          <Square margin="$4" size={120} backgroundColor="$yellow9" />
          <Circle margin="$4" size={120} backgroundColor="$green9" />
          <Square margin="$4" size={120} backgroundColor="$blue9" />
          <Circle margin="$4" size={120} backgroundColor="$purple9" />
          <Square margin="$4" size={120} backgroundColor="$pink9" />
          <Circle margin="$4" size={120} backgroundColor="$red9" />
        </XStack>
      </ScrollView></>
  )
}
    
  


