// 一个简单例子：
// 对6个人的英语测试成绩（1~10分）进行排序。假如分数是[6,5,8,8,10,9],
// 用桶排序的思想就是准备10个桶，编号依次为1~10，将成绩放入对应的桶中，例如6分放入6号桶，
// 两个8分放入8号桶...然后按照桶的标号顺序逐一输出（有就输出，没有就不输出），这就是桶排序的基本思想。

const bucketSort = (arr) =>{
    let bucketArr = [];
    let ansArr = [];
    for(let i=0;i<arr.length;i++){
        if(bucketArr[arr[i]]){
            bucketArr[arr[i]]++;//[]
        }else{
            bucketArr[arr[i]] = 1;
        }
    }

    for(let j=bucketArr.length-1;j>0;j--){
        console.log(j,":",bucketArr[j]);
        if(bucketArr[j]){
            for(let k=0;k<bucketArr[j];k++){
                ansArr.push(j);
            }
        }

    }

    Object.entries

    return ansArr;
}

const res = bucketSort([6,5,8,8,10,9]);
console.log(res);