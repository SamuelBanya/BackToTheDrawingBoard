"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_photo_album_1 = require("react-photo-album");
var clsx_1 = require("clsx");
var core_1 = require("@dnd-kit/core");
var sortable_1 = require("@dnd-kit/sortable");
var photos_1 = require("./photos");
require("./App.css");
var PhotoFrame = (0, react_1.memo)((0, react_1.forwardRef)(function (props, ref) {
    var layoutOptions = props.layoutOptions, imageProps = props.imageProps, overlay = props.overlay, active = props.active, insertPosition = props.insertPosition, attributes = props.attributes, listeners = props.listeners;
    var alt = imageProps.alt, style = imageProps.style, restImageProps = __rest(imageProps, ["alt", "style"]);
    return (React.createElement("div", __assign({ ref: ref, style: {
            width: overlay
                ? "calc(100% - ".concat(2 * layoutOptions.padding, "px)")
                : style.width,
            padding: style.padding,
            marginBottom: style.marginBottom
        }, className: (0, clsx_1["default"])("photo-frame", {
            overlay: overlay,
            active: active,
            insertBefore: insertPosition === "before",
            insertAfter: insertPosition === "after"
        }) }, attributes, listeners),
        React.createElement("img", __assign({ alt: alt, style: __assign(__assign({}, style), { width: "100%", height: "auto", padding: 0, marginBottom: 0 }) }, restImageProps))));
}));
PhotoFrame.displayName = "PhotoFrame";
var SortablePhotoFrame = function (props) {
    var photo = props.photo, activeIndex = props.activeIndex;
    var _a = (0, sortable_1.useSortable)({ id: photo.id }), attributes = _a.attributes, listeners = _a.listeners, isDragging = _a.isDragging, index = _a.index, over = _a.over, setNodeRef = _a.setNodeRef;
    return (React.createElement(PhotoFrame, __assign({ ref: setNodeRef, active: isDragging, insertPosition: activeIndex !== undefined && (over === null || over === void 0 ? void 0 : over.id) === photo.id && !isDragging
            ? index > activeIndex
                ? "after"
                : "before"
            : undefined, "aria-label": "sortable image", attributes: attributes, listeners: listeners }, props)));
};
var App = function () {
    var _a = (0, react_1.useState)(photos_1["default"].map(function (photo) { return (__assign(__assign({}, photo), { id: photo.key || photo.src })); })), photos = _a[0], setPhotos = _a[1];
    var renderedPhotos = (0, react_1.useRef)({});
    var _b = (0, react_1.useState)(null), activeId = _b[0], setActiveId = _b[1];
    var activeIndex = activeId
        ? photos.findIndex(function (photo) { return photo.id === activeId; })
        : undefined;
    var sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.MouseSensor, { activationConstraint: { distance: 5 } }), (0, core_1.useSensor)(core_1.TouchSensor, {
        activationConstraint: { delay: 50, tolerance: 10 }
    }), (0, core_1.useSensor)(core_1.KeyboardSensor, { coordinateGetter: sortable_1.sortableKeyboardCoordinates }));
    var handleDragStart = (0, react_1.useCallback)(function (_a) {
        var active = _a.active;
        return setActiveId(active.id);
    }, []);
    var handleDragEnd = (0, react_1.useCallback)(function (event) {
        var active = event.active, over = event.over;
        if (over && active.id !== over.id) {
            setPhotos(function (items) {
                var oldIndex = items.findIndex(function (item) { return item.id === active.id; });
                var newIndex = items.findIndex(function (item) { return item.id === over.id; });
                return (0, sortable_1.arrayMove)(items, oldIndex, newIndex);
            });
        }
    }, []);
    var renderPhoto = (0, react_1.useCallback)(function (props) {
        // capture rendered photos for future use in DragOverlay
        renderedPhotos.current[props.photo.id] = props;
        return React.createElement(SortablePhotoFrame, __assign({ activeIndex: activeIndex }, props));
    }, [activeIndex]);
    return (React.createElement(core_1.DndContext, { sensors: sensors, collisionDetection: core_1.closestCenter, onDragStart: handleDragStart, onDragEnd: handleDragEnd },
        React.createElement(sortable_1.SortableContext, { items: photos },
            React.createElement("div", { style: { margin: 30 } },
                React.createElement(react_photo_album_1.PhotoAlbum, { photos: photos, layout: "rows", spacing: 30, padding: 20, renderPhoto: renderPhoto }))),
        React.createElement(core_1.DragOverlay, null, activeId && (React.createElement(PhotoFrame, __assign({ overlay: true }, renderedPhotos.current[activeId]))))));
};
exports["default"] = App;
