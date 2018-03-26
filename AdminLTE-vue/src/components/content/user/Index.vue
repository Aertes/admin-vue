<template>
    <div>
        <section class="content-header">
			<ol class="breadcrumb">
				<li><a href="javascript:;"><i class="fa fa-gears"></i>系统管理</a></li>
				<li class="active">用户管理</li>
			</ol>
		</section>

		<!-- Main content -->
		<section class="content container-fluid">
            <div class="floatL treeList">
                <ul id="treeDemo" class="ztree"></ul>
            </div>
            <div class="floatR detaillist">
                <div class="search_box">
                    <div class="search_title">用户管理列表</div>
                    <form action="" method="POST" id="user_form">
                        <div class="" style="overflow:hidden;*height:100%;">
                            <div class="floatL autoFill ">
                                <label >用户名称</label>
                                <input class="" type="text" name="name" />
                            </div>
                            <div class="floatL autoFill ">
                                <label>用户编号</label>
                                <input class="" type="text" name="code" />
                            </div>
                            <div class="floatL autoFill ">
                                <label>登录账号</label>
                                <input class="" type="text" name="username" />
                            </div>
                            <div class="floatL autoFill ">
                                <label>用户角色</label>
                                <select class="" name="roleId">
                                    <option selected="selected" value="">全部</option>
                                </select>
                            </div>
                            <div class="sumbit floatL ">
                                <input type="button" class="marginLeft20 submit btn btn-block btn-primary btn-sm" id="formSubmit" value="搜 索" />
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="box">
                    <div class="box-header">
                    <h3 class="box-title">用户管理列表</h3>
                    <h3 class="box-title creat floatR"><router-link :to="{name: 'creat'}"><i class="fa fa-plus-circle"></i> 添加</router-link></h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                    <table id="example1" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 4.0
                            </td>
                            <td>Win 95+</td>
                            <td> 4</td>
                            <td>X</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.0
                            </td>
                            <td>Win 95+</td>
                            <td>5</td>
                            <td>C</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.5
                            </td>
                            <td>Win 95+</td>
                            <td>5.5</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 6
                            </td>
                            <td>Win 98+</td>
                            <td>6</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet Explorer 7</td>
                            <td>Win XP SP2+</td>
                            <td>7</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>AOL browser (AOL desktop)</td>
                            <td>Win XP</td>
                            <td>6</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 1.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.7</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 1.5</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 2.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Firefox 3.0</td>
                            <td>Win 2k+ / OSX.3+</td>
                            <td>1.9</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Camino 1.0</td>
                            <td>OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Camino 1.5</td>
                            <td>OSX.3+</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Netscape 7.2</td>
                            <td>Win 95+ / Mac OS 8.6-9.2</td>
                            <td>1.7</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Netscape Browser 8</td>
                            <td>Win 98SE+</td>
                            <td>1.7</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Netscape Navigator 9</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.0</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.1</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1.1</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.2</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1.2</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.3</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1.3</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.4</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1.4</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.5</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1.5</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.6</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>1.6</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.7</td>
                            <td>Win 98+ / OSX.1+</td>
                            <td>1.7</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Mozilla 1.8</td>
                            <td>Win 98+ / OSX.1+</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Seamonkey 1.1</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Gecko</td>
                            <td>Epiphany 2.20</td>
                            <td>Gnome</td>
                            <td>1.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Webkit</td>
                            <td>Safari 1.2</td>
                            <td>OSX.3</td>
                            <td>125.5</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Webkit</td>
                            <td>Safari 1.3</td>
                            <td>OSX.3</td>
                            <td>312.8</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Webkit</td>
                            <td>Safari 2.0</td>
                            <td>OSX.4+</td>
                            <td>419.3</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Webkit</td>
                            <td>Safari 3.0</td>
                            <td>OSX.4+</td>
                            <td>522.1</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Webkit</td>
                            <td>OmniWeb 5.5</td>
                            <td>OSX.4+</td>
                            <td>420</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Webkit</td>
                            <td>iPod Touch / iPhone</td>
                            <td>iPod</td>
                            <td>420.1</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Webkit</td>
                            <td>S60</td>
                            <td>S60</td>
                            <td>413</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera 7.0</td>
                            <td>Win 95+ / OSX.1+</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera 7.5</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera 8.0</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera 8.5</td>
                            <td>Win 95+ / OSX.2+</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera 9.0</td>
                            <td>Win 95+ / OSX.3+</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera 9.2</td>
                            <td>Win 88+ / OSX.3+</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera 9.5</td>
                            <td>Win 88+ / OSX.3+</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Opera for Wii</td>
                            <td>Wii</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Nokia N800</td>
                            <td>N800</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Presto</td>
                            <td>Nintendo DS browser</td>
                            <td>Nintendo DS</td>
                            <td>8.5</td>
                            <td>C/A<sup>1</sup></td>
                            </tr>
                            <tr>
                            <td>KHTML</td>
                            <td>Konqureror 3.1</td>
                            <td>KDE 3.1</td>
                            <td>3.1</td>
                            <td>C</td>
                            </tr>
                            <tr>
                            <td>KHTML</td>
                            <td>Konqureror 3.3</td>
                            <td>KDE 3.3</td>
                            <td>3.3</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>KHTML</td>
                            <td>Konqureror 3.5</td>
                            <td>KDE 3.5</td>
                            <td>3.5</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Tasman</td>
                            <td>Internet Explorer 4.5</td>
                            <td>Mac OS 8-9</td>
                            <td>-</td>
                            <td>X</td>
                            </tr>
                            <tr>
                            <td>Tasman</td>
                            <td>Internet Explorer 5.1</td>
                            <td>Mac OS 7.6-9</td>
                            <td>1</td>
                            <td>C</td>
                            </tr>
                            <tr>
                            <td>Tasman</td>
                            <td>Internet Explorer 5.2</td>
                            <td>Mac OS 8-X</td>
                            <td>1</td>
                            <td>C</td>
                            </tr>
                            <tr>
                            <td>Misc</td>
                            <td>NetFront 3.1</td>
                            <td>Embedded devices</td>
                            <td>-</td>
                            <td>C</td>
                            </tr>
                            <tr>
                            <td>Misc</td>
                            <td>NetFront 3.4</td>
                            <td>Embedded devices</td>
                            <td>-</td>
                            <td>A</td>
                            </tr>
                            <tr>
                            <td>Misc</td>
                            <td>Dillo 0.8</td>
                            <td>Embedded devices</td>
                            <td>-</td>
                            <td>X</td>
                            </tr>
                            <tr>
                            <td>Misc</td>
                            <td>Links</td>
                            <td>Text only</td>
                            <td>-</td>
                            <td>X</td>
                            </tr>
                            <tr>
                            <td>Misc</td>
                            <td>Lynx</td>
                            <td>Text only</td>
                            <td>-</td>
                            <td>X</td>
                            </tr>
                            <tr>
                            <td>Misc</td>
                            <td>IE Mobile</td>
                            <td>Windows Mobile 6</td>
                            <td>-</td>
                            <td>C</td>
                            </tr>
                            <tr>
                            <td>Misc</td>
                            <td>PSP browser</td>
                            <td>PSP</td>
                            <td>-</td>
                            <td>C</td>
                            </tr>
                            <tr>
                            <td>Other browsers</td>
                            <td>All others</td>
                            <td>-</td>
                            <td>-</td>
                            <td>U</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                        </tfoot>
                    </table>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
			
		</section>
    </div>
</template>

<script>
export default {
  name: "userIndex",
  data() {
    return {
      setting: {},
      zNodes: [
        {
          name: "父节点1 - 展开",
          open: true,
          children: [
            {
              name: "父节点11 - 折叠",
              children: [
                { name: "叶子节点111" },
                { name: "叶子节点112" },
                { name: "叶子节点113" },
                { name: "叶子节点114" }
              ]
            },
            {
              name: "父节点12 - 折叠",
              children: [
                { name: "叶子节点121" },
                { name: "叶子节点122" },
                { name: "叶子节点123" },
                { name: "叶子节点124" }
              ]
            },
            { name: "父节点13 - 没有子节点", isParent: true }
          ]
        },
        {
          name: "父节点2 - 折叠",
          children: [
            {
              name: "父节点21 - 展开",
              open: true,
              children: [
                { name: "叶子节点211" },
                { name: "叶子节点212" },
                { name: "叶子节点213" },
                { name: "叶子节点214" }
              ]
            },
            {
              name: "父节点22 - 折叠",
              children: [
                { name: "叶子节点221" },
                { name: "叶子节点222" },
                { name: "叶子节点223" },
                { name: "叶子节点224" }
              ]
            },
            {
              name: "父节点23 - 折叠",
              children: [
                { name: "叶子节点231" },
                { name: "叶子节点232" },
                { name: "叶子节点233" },
                { name: "叶子节点234" }
              ]
            }
          ]
        },
        { name: "父节点3 - 没有子节点", isParent: true }
      ]
    };
  },
  methods: {
	  getUserDataTable(){
		  this.axios.get({
			  url:'json/user.json',
			  params:{
				  userName:'',
				  userNumber:'',
				  accounts:'',
				  userRole:'',
			  }
		  }).then((res) => {
			  this.data = res.data;
			  this.dataTable = $("#example1").DataTable({
				paging: true,
				lengthChange: false,
				searching: false,
				ordering: true,
				info: true,
				autoWidth: false
			});
		  }, (err) => {
			  console.log(err);
		  })
	  }
  },
  mounted() {
    this.getUserDataTable();
    $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
  }
};
</script>

<style scoped>

</style>

