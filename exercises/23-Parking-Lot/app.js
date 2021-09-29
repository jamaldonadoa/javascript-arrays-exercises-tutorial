let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
console.log(getParkingLotState(parking_state))


function getParkingLotState(arr) {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  }
  let linea = []
  for (let i = 0; i < arr.length; i++) {
    linea = arr[i]
    for (let idos = 0;  idos < linea.length; idos++) {
      if (linea[idos] == 1) {
        state.totalSlots+= 1
        state.occupiedSlots+= 1
      } else if (linea[idos] == 2) {
        state.totalSlots+= 1
        state.availableSlots+= 1
      }
    }
    
  }

  return state
}