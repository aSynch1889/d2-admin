<template>
  <d2-container :filename="filename">
    <template slot="header">
      <el-alert
        type="success"
        :closable="false"
        title="这个页面展示的是全部数据的存储结构，包括系统区域和存储区域，涵盖所有用户，也就是整个 D2Admin 的数据存储结构"/>
    </template>
    <d2-highlight :code="dbData"/>
    <template slot="footer">
      <el-button type="primary" @click="load">
        重新获取本地数据
      </el-button>
    </template>
  </d2-container>
</template>

<script>
import db from '@/libs/db.js'
export default {
  data () {
    return {
      filename: __filename,
      dbData: ''
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      this.dbData = JSON.stringify(db.value(), null, 2)
    }
  }
}
</script>
