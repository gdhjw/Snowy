import { baseRequest } from '@/utils/request'

const request = (url, ...arg) => baseRequest(`/mobile/menu/` + url, ...arg)

/**
 * 移动端菜单Api接口管理器
 *
 * @author yubaoshan
 * @date  2023/01/28 22:42
 **/
export default {
	// 获取移动端菜单tree
	mobileMenuTree(data) {
		return request('tree', data, 'get')
	},
	// 获取移动端菜单列表
	mobileMenuList(data) {
		return request('list', data, 'get')
	},
	// 提交移动端菜单表单 edit为true时为编辑，默认为新增
	mobileMenuSubmitForm(data, edit = false) {
		return request(edit ? 'add' : 'edit', data)
	},
	// 删除移动端菜单
	mobileMenuDelete(data) {
		return request('delete', data)
	},
	// 获取移动端菜单详情
	mobileMenuDetail(data) {
		return request('detail', data, 'get')
	}
}
