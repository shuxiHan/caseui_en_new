<template>
  <div class="select-and-button">
    <div class="select-container">
      <Select
        v-model="selected"
        filterable
        allow-create
        @on-create="created"
        multiple
        :disabled="disabled"
        ref="select"
        placeholder="Please input a query to search related results."
      >
        <Option disabled value="0">Please enter your state option if nothing is appropriate.</Option>
        <Option v-for="item in currentOptions" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </div>
    <div class="button-container">
      <Button @click="changed">Search</Button>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: ['value', 'canCreate', 'disabled'],
  mounted () {
    // 如果有原始赋值，添加到选项列表和已选列表中去
    this.currentOptions = [...this.value]
    this.selected = [...this.value]

    // 修改原始select创建item之前
    const originFuntion = this.$refs.select.handleCreateItem
    this.$refs.select.handleCreateItem = (hideMessage) => {
      let query = this.$refs.select.query
      let flag = true
      if (this.canCreate && query && this.selected.indexOf(query) < 0) {
        // 添加已选之前，先检查是否可以添加
        let {canCreate} = this.canCreate(query)
        flag = canCreate
        if (!flag && !hideMessage) {
          this.$Notice.warning({
            title: 'Warning',
            desc: 'Query too long, please re-enter'
          })
        }
      }
      if (flag) { originFuntion() }
    }
    // 为input绑定事件，失焦时允许自动添加,但不满足添加条件的，不会显示message
    const input = this.$el.querySelector('input[type="text"]')
    input.addEventListener('blur', () => {
      this.$refs.select.handleCreateItem(true)
    })
  },
  watch: {
    value (newVal, oldVal) {
      // 如果值与原来一样，则不作修改
      if (JSON.stringify(newVal) === JSON.stringify(oldVal) &&
      JSON.stringify(newVal) === JSON.stringify(this.selected)) { return }
      // 如果出现了新值，需要再已有的option里添加选项
      newVal.map(val => {
        if (this.currentOptions.indexOf(val) < 0) {
          this.currentOptions.push(val)
        }
      })
      this.selected = [...newVal]
      // value改动，说明model的值改动
      this.$emit('on-change', newVal)
    }
  },
  data () {
    return {
      selected: [], // 已选
      currentOptions: []// 所有选项
    }
  },
  methods: {
    created (value) {
      this.$emit('optionCreated', value)
      // 在可选项中添加一项
      this.currentOptions.push(value)
    },
    changed () {
      this.$emit('resetdonotsearch')
      this.$emit('searchingstate')
      this.$emit('change', this.selected)
      this.$emit('states-backup', this.selected)
      this.$emit('show-drawer')
    }
  }

}
</script>

<style>
.select-and-button {
  display: flex;
  align-items: center;
}

.select-container {
  flex: 1;
  margin-right: 10px;
  max-width: 350px; /* 根据需要调整宽度 */
}

.button-container {
  /* 根据需要设置按钮的样式 */
}
</style>
