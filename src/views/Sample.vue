<template>
  <div class="sandbox">
    <!-- ここにこのコンポーネントの HTML を書きます -->
    <h1>SandBox</h1>

    <div>
      <h2>テンプレート構文</h2>
      <div>
        <h3>テキスト</h3>
        <p>{{ msg }}</p>

        <h3>属性</h3>
        <p v-bind:id="dynamicId"></p>

        <h3>JavaScript</h3>
        <p>{{ 776 + 1 }}</p>
        <p>{{ ok ? 'YES' : 'NO' }}</p>
        <p>{{ msg.split('').reverse().join('') }}</p>
      </div>

      <div>
        <h3>ディレクティブ</h3>
        <p v-if="seen">Now you see me</p>

        <h3>引数</h3>
        <p><a v-bind:href="url">Vue.js ガイド</a></p>
        <p><button v-on:click="log('クリックされました！')">Click Me!</button></p>
      </div>

      <div>
        <h3>省略記法</h3>
        <p><a :href="url">Vue.js ガイド</a></p>
        <p><button @click="log('クリックされました！')">Click Me!</button></p>
      </div>
    </div>

    <div>
      <h2>メソッド</h2>
      <p>{{ now() }}</p>
      <p><button @click="log('クリックされました！')">Click Me!</button></p>
    </div>

    <div>
      <h2>算出プロパティ</h2>
      <p>Original message: "{{ msg }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>

    <div>
      <h2>HTML クラスのバインディング</h2>
      <div v-bind:class="{ active: isActive, 'text-danger': hasError }">
        class オブジェクト構文(1)
      </div>
      <div v-bind:class="classObject">
        class オブジェクト構文(2)
      </div>
      <div v-bind:class="[activeClass, errorClass]">
        class 配列構文
      </div>
    </div>

    <div>
      <h2>インラインスタイルのバインディング</h2>
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
        style オブジェクト構文(1)
      </div>
      <div v-bind:style="styleObject">
        style オブジェクト構文(2)
      </div>
      <div v-bind:style="[baseStyles, overridingStyles]">
        style 配列構文
      </div>
    </div>

    <div>
      <h2>条件付きレンダリング</h2>
      <div v-if="awesome">
        Vue is awesome!
      </div>
      <div v-else>
        Oh no
      </div>
      <h2 v-show="awesome">v-show</h2>
    </div>

    <div>
      <h2>リストレンダリング</h2>
      <ul>
        <li
          v-for="item in items"
          :key="item.id"
        >
          {{ item.message }}
        </li>
      </ul>
    </div>

    <div>
      <h2>イベントハンドリング</h2>
      <div>
        <h3>イベントの購読</h3>
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
      </div>
      <div>
        <h3>メソッドイベントハンドラ</h3>
        <button v-on:click="greet">Greet</button>
      </div>
      <div>
        <h3>インラインメソッドハンドラ</h3>
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
      </div>
    </div>

    <div>
      <h2>フォーム入力バインディング</h2>
      <div>
        <h3>テキスト</h3>
        <input
          v-model="message"
          placeholder="edit me"
        >
        <p>Message is: {{ message }}</p>
      </div>
      <div>
        <h3>複数行テキスト</h3>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea
          v-model="message"
          placeholder="add multiple lines"
        ></textarea>
      </div>
      <div>
        <h3>チェックボックス</h3>
        <input
          type="checkbox"
          id="checkbox"
          v-model="checked"
        >
        <label for="checkbox">{{ checked }}</label>
      </div>
      <div>
        <h3>複数チェックボックス</h3>
        <div>
          <input
            type="checkbox"
            id="jack"
            value="Jack"
            v-model="checkedNames"
          >
          <label for="jack">Jack</label>
          <input
            type="checkbox"
            id="john"
            value="John"
            v-model="checkedNames"
          >
          <label for="john">John</label>
          <input
            type="checkbox"
            id="mike"
            value="Mike"
            v-model="checkedNames"
          >
          <label for="mike">Mike</label>
          <br>
          <span>Checked names: {{ checkedNames }}</span>
        </div>
      </div>
      <div>
        <h3>ラジオ</h3>
        <input
          type="radio"
          id="one"
          value="One"
          v-model="picked"
        >
        <label for="one">One</label>
        <br>
        <input
          type="radio"
          id="two"
          value="Two"
          v-model="picked"
        >
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
      <div>
        <h3>選択</h3>
        <select v-model="selected">
          <option
            disabled
            value=""
          >Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
      <div>
        <h3>複数の選択</h3>
        <select
          v-model="selecteds"
          multiple
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selecteds }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// ここに JavaScript を書きます

// このコンポーネントで使用する Vue オブジェクト
export default {
  // データ
  data() {
    return {
      // テキスト
      msg: "Hello, World!",
      // 属性
      dynamicId: "someId",
      // JavaScript
      ok: true,
      // ディレクティブ
      seen: true,
      url: "https://jp.vuejs.org/v2/guide",
      // HTML クラスのバインディング
      isActive: true,
      hasError: true,
      classObject: {
        active: true,
        "text-danger": true
      },
      activeClass: "active",
      errorClass: "text-danger",
      // インラインスタイルのバインディング
      activeColor: "orange",
      fontSize: 30,
      styleObject: {
        color: "purple",
        fontSize: "24px"
      },
      baseStyles: {
        color: "gray"
      },
      overridingStyles: {
        fontWeight: "bold",
        fontSize: "20px"
      },
      // 条件付きレンダリング
      awesome: true,
      // リストレンダリング
      items: [
        { id: 1, message: "Foo" },
        { id: 2, message: "Bar" },
        { id: 3, message: "Baz" },
        { id: 4, message: "Hoge" },
        { id: 5, message: "Fuga" }
      ],
      // イベントハンドリング
      counter: 0,
      name: "Vue.js",
      // フォーム入力バインディング
      message: "",
      checked: false,
      checkedNames: [],
      picked: "",
      selected: "",
      selecteds: []
    };
  },
  // 算出プロパティ
  computed: {
    reversedMessage: function() {
      // `this` は vm インスタンスを指します
      return this.msg
        .split("")
        .reverse()
        .join("");
    }
  },
  // メソッド
  methods: {
    now() {
      return new Date();
    },
    log(logMsg) {
      console.log(logMsg);
    },
    greet(event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert("Hello " + this.name + "!");
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName);
      }
    },
    say(message) {
      alert(message);
    }
  }
};
</script>

<style>
/* ここに、このコンポーネントに適用する CSS を書きます */
.active {
  font-weight: bold;
}
.text-danger {
  color: red;
}

/* 削除
.sandbox {
  color: red;
}
*/
</style>