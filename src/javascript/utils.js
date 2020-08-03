export default {
  methods: {
    strAddOk: function(strTest) {
      return strTest + ":OK";
    },
    myRun: function() {
        const obj = {a:0,b:1,c:2};
        const json = JSON.stringify(obj);
        console.log(json);
      return "JSON_OK";
    },
    pushStorageItem:function(key,value){
        localStorage.setItem(key,value);
    },
    pushStorageObj:function(key,obj){
        const json = JSON.stringify(obj);
        localStorage.setItem(key,json);
    },
    getStorage:function(key,value){
        localStorage.getItem(key,value);
    },
    pushJsonFileObj:function(key,obj){
        const json = JSON.stringify(obj);
        localStorage.setItem(key,json);
    },
    getJsonFile:function(key,value){
        localStorage.getItem(key,value);
    }
  },
};
