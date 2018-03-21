<template>
    <div>
        <form action="" method="POST" id="user_form">
            <div class="" style="overflow:hidden;*height:100%;">
                <div class="floatL autoFill ieHack">
                    <label>用户名称</label>
                    <input class="key search moreWidthText" type="text" name="name" style=" height: 30px;" />
                </div>
                <div class="floatL autoFill ieHack">
                    <label>用户编号</label>
                    <input class="key search moreWidthText" type="text" name="code" style="height: 30px;" />
                </div>
                <div class="floatL autoFill ieHack">
                    <label>登录账号</label>
                    <input class="key search moreWidthText" type="text" name="username" style="height: 30px;" />
                </div>
                <div class="floatL autoFill ieHack">
                    <label>用户角色</label>
                    <select class="borderRadius5 key moreWidthselect search" name="roleId">
                        <option selected="selected" value="">全部</option>
                    </select>
                </div>
                <div class="floatL autoFill ieHack">
                    <label>用户状态</label>
                </div>
                <div class="sumbit floatL autoFill ieHack">
                    <input type="button" class="submit" id="formSubmit" value="搜 索" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'userIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
