import { useState } from 'react'
import { Platform, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { globalStyles } from "../theme/global.styles.ts";
import Icon from "react-native-vector-icons/Ionicons";


export const CounterM3Screen = () => {
	const [count, setCount] = useState(0)
	return (
		<View style={globalStyles.centerContainer}>
			<Text style={globalStyles.title}>{count}</Text>
			<Icon name="car-outline" size={25} />
			<FAB
				style={styles.fab}
				onPress={() => setCount(count + 1)}
				onLongPress={() => {setCount(0)}}
				icon="add-outline"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: Platform.OS === 'android' ? 15 : 0,
		backgroundColor: Platform.OS === 'android' ? '#d3fc60' : '#e2d6ff',
	},
})
