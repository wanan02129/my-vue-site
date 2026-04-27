const metaMap = {
  '1.png': { title: '11', link: '/demo/demo1' },
  '2.png': { title: '22', link: '/demo/demo2' },
  '3.png': { title: '33', link: '/demo/demo3' },
  '4.png': { title: '44', link: '/demo/demo4' },
  '5.png': { title: '55', link: '/demo/demo5' },
  '6.png': { title: '66', link: '/demo/demo6' },
  '7.png': { title: '77', link: '/demo/demo7' },
  '8.png': { title: '88', link: '/demo/demo8' },
  '9.png': { title: '99', link: '/demo/demo9' },
  '10.png': { title: '10', link: '/demo/demo10' },
  '11.png': { title: '11', link: '/demo/demo11' },
  '12.png': { title: '12', link: '/demo/demo12' },
  '13.png': { title: '13', link: '/demo/demo13' },
  '14.png': { title: '14', link: '/demo/demo14' },
  '15.png': { title: '15', link: '/demo/demo15' },
  '16.png': { title: '16', link: '/demo/demo16' },
  '17.png': { title: '17', link: '/demo/demo17' },
  '18.png': { title: '18', link: '/demo/demo18' },
  '19.png': { title: '19', link: '/demo/demo19' },
  '20.png': { title: '20', link: '/demo/demo20' },
}

const modules = import.meta.glob('@/assets/demo-bg/*.png', {
  eager: true,
  import: 'default'
})

export const items = Object.keys(modules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)\.png$/)[1])
    const numB = parseInt(b.match(/(\d+)\.png$/)[1])
    return numA - numB
  })
  .map((key, index) => {
    const fileName = key.split('/').pop()
    const meta = metaMap[fileName] || {}

    return {
      id: index + 1,
      title: meta.title,
      img: modules[key],
      link: meta.link
    }
  })