// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `genericData.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    require("Ice/Object");
    require("Ice/ObjectPrx");
    require("Ice/Operation");
    require("Ice/Long");
    require("Ice/HashMap");
    require("Ice/HashUtil");
    require("Ice/ArrayUtil");
    require("Ice/StreamHelpers");
    
    var Ice = global.Ice || {};
    require("common");
    
    var jderobot = global.jderobot || {};

    /**
     * Static description of the image source.
     **/
    jderobot.GenericData = Slice.defineObject(
        function(name, format, data)
        {
            Ice.Object.call(this);
            this.name = name !== undefined ? name : null;
            this.format = format !== undefined ? format : null;
            this.data = data !== undefined ? data : null;
        },
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::GenericData"
        ],
        -1,
        function(__os)
        {
            __os.writeString(this.name);
            __os.writeString(this.format);
            jderobot.ByteSeqHelper.write(__os, this.data);
        },
        function(__is)
        {
            this.name = __is.readString();
            this.format = __is.readString();
            this.data = jderobot.ByteSeqHelper.read(__is);
        },
        false);

    jderobot.GenericDataPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.GenericData.ice_staticId, undefined);

    Slice.defineOperations(jderobot.GenericData, jderobot.GenericDataPrx);

    jderobot.genericDataProvider = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::genericDataProvider"
        ],
        -1, undefined, undefined, false);

    jderobot.genericDataProviderPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.genericDataProvider.ice_staticId, undefined);

    Slice.defineOperations(jderobot.genericDataProvider, jderobot.genericDataProviderPrx,
    {
        "getGenericData": [, 2, 2, , , ["jderobot.GenericData", true], , , , , true]
    });
    global.jderobot = jderobot;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));
