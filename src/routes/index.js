import {createNativeStackNavigatior} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '.../pages/SignIn'

const Stack = createNativeStackNavigatior();

export default fuction Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen
            name ="Welcome"
            component={Welcome}
        />
        <Stack.Screen
            name ="SignIn"
            component={SignIn}
        />
    

    </Stack.Navigator>
    )
}