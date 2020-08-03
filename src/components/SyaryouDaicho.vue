<template>
  <!-- todo プロパティのテキストを表示 -->
  <div>
    <h1>{{message}}</h1>

    <form>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <label for="texta">形式:</label>
          <label class="sr-only" for="text5a">形式</label>
          <input type="text" class="form-control mb-2" id="text5a" placeholder="形式" v-model="keisiki"/>
        </div>
        <div class="col-auto">
          <label for="text5b">
            <span>車号:</span>
          </label>
          <label class="sr-only" for="text5b">車号</label>
          <input type="text" class="form-control mb-2" id="text5b" placeholder="車号" v-model="gousya"/>
        </div>
      </div>
    </form>

    <div class="form-group">
      <div class="form-row align-items-center">
        <div class="form-group">
          <label for="group1">所属1:</label>
          <select id="group1" class="form-control" v-model="shozoku1">
            <option v-for="lstShozoku1 in Listshozoku1s" v-bind:value="lstShozoku1.name" v-bind:key="lstShozoku1.id">
                {{ lstShozoku1.name }}
            </option>
            <!-- <option></option>
            <option>秋田車両センター</option>
            <option>新潟車両センター</option> -->
          </select>
        </div>
        <div class="form-group">
          <label for="group2">所属2:</label>
          <select id="group2" class="form-control" v-model="shozoku2">
            <option></option>
            <option>ロングシート</option>
            <option>A車両グループ</option>
            <option>B車両グループ</option>
          </select>
        </div>
        <div class="form-group">
          <label for="group3">所属3:</label>
          <select id="group3" class="form-control" v-model="shozoku3">
            <option></option>
            <option>H101</option>
            <option>山手線</option>
            <option>XX編成</option>
          </select>
        </div>
      </div>
    </div>




    <input type="button" value="登録" v-on:click="touroku" />
  </div>
</template>

<script>

import utils from "../javascript/utils.js";
// import clsSyaryouDaicho from "../javascript/clsSyaryouDaicho.js"; // eslint-disable-line

import user from "../javascript/clsSyaryouDaicho.js";

// console.log(utils.methods.myRun());
// utils.methods.pushStorageItem(11, 2);
// utils.methods.pushStorageItem(22, { a: "11", b: "22" });
// utils.methods.pushStorageObj(33, { a: "11", b: "22" });
// let dclsSryaryouDicho = new clsSyaryouDaicho(); // eslint-disable-line
// console.log(dclsSryaryouDicho);
console.log(user);
console.log(user.publicval);
console.log(user.data.publicVal);

export default {
  data() {
    return { 
        keisiki:"",
        gousya:"",
        shozoku1:"",
        shozoku2:"",
        shozoku3:"",
        message: utils.methods.strAddOk("aaa") ,
        selected: '',
        Listshozoku1s: [
            { id: 1, name: ' ' },
            { id: 2, name: '秋田車両センター' },
            { id: 3, name: '新潟車両センター' }
        ]
        };
  },
  // メソッド
  methods: {
    touroku() {
      alert("登録します");

    }
  }
};


</script>