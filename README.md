# Javascript Helper Functions

[![Latest Stable Version](https://poser.pugx.org/la40/js-helpers/v/stable)](https://packagist.org/packages/la40/js-helpers)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)
[![Total Downloads](https://poser.pugx.org/la40/js-helpers/downloads)](https://packagist.org/packages/la40/js-helpers)

## Functions

<dl>
<dt><a href="#arrayMove">arrayMove(arr, oldIndex, newIndex)</a> ⇒ <code>array</code></dt>
<dd><p>Move an array item from an index to another</p>
</dd>
<dt><a href="#arrayToObjectByProperty">arrayToObjectByProperty(arr, property, compact)</a> ⇒ <code>object</code></dt>
<dd><p>Convert an array with objects to an object like {&quot;property value x&quot;: [object x, object y ...], &quot;property value y&quot;: [object z, object c ...]}</p>
</dd>
<dt><a href="#arrayContainsSomeArray">arrayContainsSomeArray(arr1, arr2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if an array contains one or more items from another array.</p>
</dd>
<dt><a href="#arrayGetFirstFoundInArray">arrayGetFirstFoundInArray(arr1, arr2)</a> ⇒ <code>null</code> | <code>any</code></dt>
<dd><p>Get first found item in arr1.</p>
</dd>
<dt><a href="#stringToBoolean">stringToBoolean(string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Convert boolean string like &quot;false|no|0|&#39;&#39;&quot; to false everything else to true</p>
</dd>
<dt><a href="#isEmpty">isEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if value not empty (null,&#39;&#39;,undefined,{},{ k1: null, k2: &quot;&quot; },[],[null,&#39;&#39;])</p>
</dd>
<dt><a href="#isEuDateTime">isEuDateTime(euDateTimeString)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if given string fulfill european data time format dd.mm.yyyy hh:mm:ss</p>
</dd>
<dt><a href="#isDeepEqual">isDeepEqual(object1, object2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if two objects are deep equal</p>
</dd>
<dt><a href="#isObject">isObject(o)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if an object inherits Object, {}</p>
</dd>
<dt><a href="#recursiveDeepCopy">recursiveDeepCopy(o)</a> ⇒ <code>object</code></dt>
<dd><p>Will create a recursive deep copy of an object</p>
</dd>
</dl>

<a name="arrayMove"></a>

## arrayMove(arr, oldIndex, newIndex) ⇒ <code>array</code>

Move an array item from an index to another

**Kind**: global function  
**Returns**: <code>array</code> - The new array

| Param    | Type               |
| -------- | ------------------ |
| arr      | <code>array</code> |
| oldIndex | <code>int</code>   |
| newIndex | <code>int</code>   |

<a name="arrayToObjectByProperty"></a>

## arrayToObjectByProperty(arr, property, compact) ⇒ <code>object</code>

Convert an array with objects to an object like {"property value x": [object x, object y ...], "property value y": [object z, object c ...]}

**Kind**: global function  
**Returns**: <code>object</code> - The new object

| Param    | Type                 | Description                                                                                           |
| -------- | -------------------- | ----------------------------------------------------------------------------------------------------- |
| arr      | <code>array</code>   | array with objects to convert                                                                         |
| property | <code>string</code>  | property to use                                                                                       |
| compact  | <code>boolean</code> | default to true will remove the property from objects x,y,z,c , if false will leave the objects as is |

<a name="arrayContainsSomeArray"></a>

## arrayContainsSomeArray(arr1, arr2) ⇒ <code>boolean</code>

Determine if an array contains one or more items from another array.

**Kind**: global function

| Param | Type               | Description                                        |
| ----- | ------------------ | -------------------------------------------------- |
| arr1  | <code>array</code> | the array to search                                |
| arr2  | <code>array</code> | the array providing items to check for in the arr1 |

<a name="arrayGetFirstFoundInArray"></a>

## arrayGetFirstFoundInArray(arr1, arr2) ⇒ <code>null</code> \| <code>any</code>

Get first found item in arr1.

**Kind**: global function  
**Returns**: <code>null</code> \| <code>any</code> - null when not found or the found item from arr1

| Param | Type               | Description                                |
| ----- | ------------------ | ------------------------------------------ |
| arr1  | <code>array</code> | the array to get the first found item from |
| arr2  | <code>array</code> | the array to search in                     |

<a name="stringToBoolean"></a>

## stringToBoolean(string) ⇒ <code>boolean</code>

Convert boolean string like "false|no|0|''" to false everything else to true

**Kind**: global function

| Param  | Type                |
| ------ | ------------------- |
| string | <code>string</code> |

<a name="isEmpty"></a>

## isEmpty(value) ⇒ <code>boolean</code>

Check if value not empty (null,'',undefined,{},{ k1: null, k2: "" },[],[null,''])

**Kind**: global function

| Param | Type             |
| ----- | ---------------- |
| value | <code>any</code> |

<a name="isEuDateTime"></a>

## isEuDateTime(euDateTimeString) ⇒ <code>boolean</code>

Check if given string fulfill european data time format dd.mm.yyyy hh:mm:ss

**Kind**: global function

| Param            | Type                |
| ---------------- | ------------------- |
| euDateTimeString | <code>string</code> |

<a name="isDeepEqual"></a>

## isDeepEqual(object1, object2) ⇒ <code>boolean</code>

Check if two objects are deep equal

**Kind**: global function

| Param   | Type                |
| ------- | ------------------- |
| object1 | <code>object</code> |
| object2 | <code>object</code> |

<a name="isObject"></a>

## isObject(o) ⇒ <code>boolean</code>

Check if an object inherits Object, {}

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| o     | <code>object</code> |

<a name="recursiveDeepCopy"></a>

## recursiveDeepCopy(o) ⇒ <code>object</code>

Will create a recursive deep copy of an object

**Kind**: global function

| Param | Type                |
| ----- | ------------------- |
| o     | <code>object</code> |

## Testing

```bash
$ npm run test
```

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Security

If you discover any security related issues, please email lachezar@grigorov.website instead of using the issue tracker.

## Credits

- [Lachezar Grigorov](http://grigorov.website)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
