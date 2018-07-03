###  懒加载的三种方法
1.  offsetTop

    通过element.offsetTop < window.innerHeight + document.docuementElement来判断当前元素是否出现在视口。
    
     但是这个方法有局限性，offsetTop是相对于offsetParent顶部的值。有关于offsetParent的介绍是这样的：
     > The HTMLElement.offsetParent read-only property returns a reference to the object which is the closest (nearest in the containment hierarchy) positioned containing element. If the element is non-positioned, the nearest table, table cell or root element (html in standards compliant mode; body in quirks rendering mode) is returned by offsetParent.
     
     意思就是offsetPareent是最接近当前元素的定位祖先元素（没有这样的元素的以root元素为参照），也就是说这种方法只能用在祖先元素都没有positioned的情况下，这显然是不合理的。
     
2. elemen.getBoundingClientRect()

    >返回值是一个DomRect对象，DOMRect object with eight properties: left, top, right, bottom, x, y, width, height

    这里就是用的DomRect的top值，表示的是当前元素相对视口的距离。判断当element.getBoundingClientRect().top <= window.innerHeight 时，把正确的src路径赋予img的src上。
 
 
3. IntersectionObserver
    
    虽然第二种方法可以实现效果，但是它有很大的性能问题，当每次调用getBoundingClientRect方法时，都会重新计算整个页面的布局，可能会造成页面相当大的闪烁。
    
    IntersectionObserver 就是为此而生的，它可以检测一个元素是否可见，IntersectionObserver 能让你知道一个被观测的元素什么时候进入或离开浏览器的视口。
    
    > var io = new IntersectionObserver(callback, option);
    
    构造函数的返回值是一个观察器实例。实例的observe方法可以指定观察哪个 DOM 节点。
    
    ```
    // 开始观察
    io.observe(document.getElementById('example'));
    
    // 停止观察
    io.unobserve(element);
    
    // 关闭观察器
    io.disconnect()
    ```
    * callback 参数
        
        目标元素的可见性变化时，就会调用观察器的回调函数callback
        ```
        var io = new IntersectionObserver(
          entries => {
            console.log(entries);
          }
        );
        ```
        
        callback函数的参数（entries）是一个数组，每个成员都是一个IntersectionObserverEntry对象。举例来说，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。
        
        这里主要用到的intersectionObserverEntry对象的属性时target和intersectionRatio，分别表示目标对象和目标对象的可见比例。
        
        当目标对象的可见比例大于0的时候，把目标对象data-src上的值赋予src上就ok了，然后在将unobserve这个目标元素，因为此时已经实现了该图片的懒加载。
    
