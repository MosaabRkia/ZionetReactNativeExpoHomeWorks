import { View, Text ,Button } from 'react-native'
import React ,{useState} from 'react'

const Mission2 = () => {
    const [picPlace,setPicPlace] = useState(null)
    const pictures = [
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
        "https://kitcat.com.sg/wp-content/uploads/2020/07/Kit-Cat.png"
    ]

  return (
    <View>
     <Button onPress={setPicPlace(0)} title={"First Picture"}/>
     <Button onPress={setPicPlace(1)} title={"Second Picture"}/>
     <Image source={{uri:picPlace===null?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdna_Avl8Wrmd0wM2k75G9xgmA6FY8l4xbmmFcViX_5xolMPoFSgkMndfdWrQOZZstO18&usqp=CAU":pictures[picPlace]}} 
     style={{width:'90%',height:"90%"}}/>
    </View>
  )
}

export default Mission2