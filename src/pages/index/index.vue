<template>
    <div id="my-index">
        <div class="dropdown-menu">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img src="../../assets/index/user-default.png" class="user-head" alt=""> 下拉菜单
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="index-main">

            <div class="index-main-title">
                群发消息
            </div>
            <div class="main">
                <div class="index-main-title-left">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="用户管理" name="first">

                        </el-tab-pane>
                        <el-tab-pane label="配置管理" name="second">

                        </el-tab-pane>
                        <el-tab-pane label="角色管理" name="third">

                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="index-main-title-down">
                    <div class="title">消息内容</div>
                    <div class="index-main-title-right">
                        <el-select v-model="value1" placeholder="请选择" class="index-select">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value2" placeholder="请选择" class="index-select">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value3" placeholder="请选择" class="index-select">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                </div>
                <textarea class="content" placeholder="请输入您要发送到消息内容
                
                
                
                
                
                                    




                                    
                                    
                                    
                                    
                                    
                                                                                                                 最多输入200个字符">

                </textarea>
                <div class="btn-area">
                    <el-button type="text">存草稿</el-button>
                    <el-button type="success">群发</el-button>
                </div>
            </div>
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <div class="index-logo">

            </div>
            <el-menu-item index="1" class="menu-item">
                <i class="el-icon-menu"></i>群发消息</el-menu-item>
            <el-menu-item index="2" class="menu-item">
                <i class="el-icon-menu"></i>员工管理</el-menu-item>
            <el-menu-item index="3" class="menu-item">
                <i class="el-icon-setting"></i>员工健康</el-menu-item>
            <el-menu-item index="4" class="menu-item">
                <i class="el-icon-setting"></i>企业管理</el-menu-item>
            <el-menu-item index="5" class="menu-item">
                <i class="el-icon-setting"></i>模版管理</el-menu-item>
            <el-menu-item index="6" class="menu-item">
                <i class="el-icon-setting"></i>用户管理</el-menu-item>
            <el-menu-item index="7" class="menu-item">
                <i class="el-icon-setting"></i>系统管理</el-menu-item>
        </el-menu>
    </div>
</template>


<script>
import './style.css'
export default {
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}

</script>
