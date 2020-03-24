/**
 * 路由中心
 * author
 * time
 */
// import test from "../pages/test";
import Vue from 'vue';
import test from '../pages/test'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

export default [
    {
        path: '/',
        name: 'index',
        component: test
    },
    {
        path: '/foo',
        name: 'foo',
        component: test
    },
    {
        path: '/bar',
        name: 'bar',
        component: Bar
    }
]