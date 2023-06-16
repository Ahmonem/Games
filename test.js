let nums = [3,2,2,1,1,1]
let k = 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    console.log(freqMap, "freqMap")
    
    for(let [num, freq] of freqMap) {
        console.log(freq, "freq")
        console.log(num, "num")
        bucket[freq] = (bucket[freq] || new Set()).add(num);
        console.log(bucket[freq], "bucket freq")
    }

    console.log(bucket)
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        console.log(result)
        if(result.length === k) break;
    }
    return result;
};

console.log(topKFrequent(nums, k))