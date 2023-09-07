function intersect (nums1, nums2) {
    const objNums1 = {};
    const objNums2 = {};

    for(let i = 0; i < nums1.length; i++) {

        if(objNums1[`${nums1[String(i)]}`]) {
            ++objNums1[`${nums1[String(i)]}`];
        } else {
            objNums1[`${nums1[String(i)]}`] = 1;
        } 
    }

    for(let i = 0; i < nums2.length; i++) {
        if(objNums1[`${nums2[String(i)]}`]) {
            objNums2[`${nums2[String(i)]}`] = nums2[i];
        }
    }

    console.log(Object.keys(objNums2));
    return Object.keys(objNums2);
}

const nums1 = [1,2,2,1]
const nums2 = [2,2]

intersect(nums1, nums2);