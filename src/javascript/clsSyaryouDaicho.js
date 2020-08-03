export default {
    props:{
        name: {
            type: String, // String型に限定
            required: true, // 必須項目
        },
        number: {
            type: Number, // Number型に限定
            default: 20 // default値を設定
        },
        data: {
            type: [String, Number] // 複数の型に対応
        },
        // String型の’YES’, ’NO’のみに限定
        check: {
            // validator :function (value) {
            //     return [‘YES’, ‘NO’].indexOf(value) !== -1
        }
    },
    data:{
        publicVal2:12
    },
    methods: {
        
    }
}
  



export let publicVal = 12;

// // 配列のエクスポート
// export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// // 定数のエクスポート
// export const MODULES_BECAME_STANDARD_YEAR = 2015;

// // クラスのエクスポート
// export class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// export function getname(){
//     return "aaa";
// }

// export class SyaryouDaicho { // eslint-disable-line
//     constructor() {
//         this._keishiki = "";
//         // this._syagou = "";
//         // this._shozoku1 = "000";
//         // this._shozoku2 = "000";
//         // this._shozoku3 = "000";
//     }

//     get keishiki() {return this._keishiki}
//     set keishiki(val) {this._keishiki = val}
//     // get syagou() {return this._syagou}
//     // set syagou(val) {this._syagou = val}
//     // get shozoku1() {return this._shozoku1}
//     // set shozoku1(val) {this._shozoku1 = val}
//     // get shozoku2() {return this._shozoku2}
//     // set shozoku2(val) {this._shozoku2 = val}
//     // get shozoku3() {return this._shozoku3}
//     // set shozoku3(val) {this._shozoku3 = val}
// }

//     // let aasfda = new SyaryouDaicho();
//     // console.log(aasfda);