#coding=utf-8
import urllib
import re

'''读取URL'''
def gethtml(url):
    page = urllib.urlopen(url) #urlopen()打开一个URL地址
    html = page.read() #read()读取URL上的数据
    return html

'''读取指定内容'''
def getimg(html):
    reg = r'src="(.+?\.jpeg)" alt'
    imgre = re.compile(reg) #编译正则表达式
    imglist = re.findall(imgre,html) #读取html中包含了imgre表达式的内容
    x = 0 #x用来给文件重命名时，通过x变量加1
    for imgurl in imglist:
        urllib.urlretrieve(imgurl,'%s.jpg' % x) #将数据下载到本地
        x+=1

html = gethtml('http://list.vip.com/582394.html')
print getimg(html)
