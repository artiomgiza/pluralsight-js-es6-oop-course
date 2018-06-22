class Drone {
   constructor(id, name) {
     console.log("constr",id, name)
     this._id = id
     this._name = name
   }

    get id() {
      return this._id
    }

    set id(val) {
      return this._id = val
    }

   fly() {
    console.log("fly -->",this.id) 
   }

   static getCom() {
     console.log("com!")
   }
}
Drone.max = 2000

let drone1 = new Drone(111, "asd1");

drone1.id = "new_id"
drone1.fly();
Drone.getCom()