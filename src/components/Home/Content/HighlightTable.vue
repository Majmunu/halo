<template>
<div class="HighlightTable col-xl-8">
  <ul class="col-xl-12">
    <li v-for="(item,id) in list" :key="id" >
      <div class="item col-xl-12">
        <div class="image" >
          <img :src="item.src" alt="" width="80" height="67">
        </div>
        <div class="content">
          <h5>真我Q5发布会定档</h5>
          <a href="">嗷嗷待哺</a>
          <span>4月10日</span>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "HighlightTable",
  data(){
    return{
      list:[
        {id:'001',src:require('@/assets/images/home/w.jpg'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
        {id:'002',src:require('@/assets/images/home/table.webp'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
        {id:'003',src:require('@/assets/images/home/w.jpg'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
        {id:'004',src:require('@/assets/images/home/table.webp'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
        {id:'005',src:require('@/assets/images/home/w.jpg'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
        {id:'006',src:require('@/assets/images/home/table.webp'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
        {id:'007',src:require('@/assets/images/home/w.jpg'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
        {id:'008',src:require('@/assets/images/home/table.webp'),title:'真我Q5发布会定档',author:'嗷嗷待哺',date:'4月10日'},
      ]
    }
  }
}
</script>

<style scoped>
.HighlightTable{
  /*width: 778px;*/
  /*border: 3px solid slateblue;*/
  float: right;


}
ul{
  list-style-type: none;
}
.item{
 /* border: 3px solid gold;*/
 /* width: 356px;
  height: 76px;*/


}
.image{

  width: 80px;
  height: 67px;
  float: left;
}
.content{
  width: 190px;
  height: 67px;
  float: left;
}
li{
  display: flex;
  float: left;
  margin-bottom: 14px;
  padding-left: 5px;
  margin-left: 5px;

}
</style>