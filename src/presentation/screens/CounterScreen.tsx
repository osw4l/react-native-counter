import { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';


export const CounterScreen = () => {
	const [count, setCount] = useState(0)
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{count}</Text>
			<Button mode="contained"
							onPress={() => {setCount(count + 1)}}
							onLongPress={() => {setCount(0)}}>
				Press me pls
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 80,
		color: Platform.OS === 'ios' ? 'black' : 'white',
		fontWeight: '300',
	},

})
