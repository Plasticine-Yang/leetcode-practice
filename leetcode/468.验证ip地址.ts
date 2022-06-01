/*
 * @lc app=leetcode.cn id=468 lang=typescript
 *
 * [468] 验证IP地址
 */

// @lc code=start
function validIPAddress(queryIP: string): string {
  const ipv4 = queryIP.split('.');
  const ipv6 = queryIP.split(':');
  let res = 'Neither';

  const handleIPV4 = (ipv4: string[]) => {
    let flag = true;

    if (ipv4.length !== 4) flag = false;

    for (const ip of ipv4) {
      // 必须是非空字符串且得是数字
      if (ip.length === 0 || /\D/g.test(ip)) {
        flag = false;
        break;
      }

      // 1. 0 <= xi <= 255
      if (parseInt(ip) < 0 || parseInt(ip) > 255) {
        flag = false;
        break;
      }
      // 2. 不能包含前导零
      if (ip.length > 1 && ip.startsWith('0')) {
        flag = false;
        break;
      }
    }

    if (flag) res = 'IPv4';
  };

  const handleIPV6 = (ipv6: string[]) => {
    let flag = true;

    if (ipv6.length !== 8) {
      flag = false;
    }

    for (const ip of ipv6) {
      // 1. 1 <= xi.length <= 4
      if (ip.length < 1 || ip.length > 4) {
        flag = false;
        break;
      }
      // 2. 只可以包含数字、大小写英文字母
      if (/[^0-9a-fA-F]/.test(ip)) {
        flag = false;
        break;
      }
    }

    if (flag) res = 'IPv6';
  };

  if (ipv4[0] !== queryIP) {
    handleIPV4(ipv4);
  }
  if (ipv6[0] !== queryIP) {
    handleIPV6(ipv6);
  }

  return res;
}
// @lc code=end

// const ans = validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334');
// const ans = validIPAddress('172.16.254.1');
// const ans = validIPAddress('1e1.4.5.6');
// const ans = validIPAddress('12..33.4');
// const ans = validIPAddress('20EE:FGb8:85a3:0:0:8A2E:0370:7334');
const ans = validIPAddress('192.0.0.1');
console.log(ans);

export {};
