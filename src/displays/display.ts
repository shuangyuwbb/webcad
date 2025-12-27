import { Signal } from "@fsdev/fs-utils"

export class Display<T, C, E, V> {
    protected _viewObj: V
    protected _entityId: number

    public isLayer: boolean = false
    public dirty: boolean = false
    public materialDirty: boolean = false
    public geometryDirty: boolean = false
    public positionDirty: boolean = false
    public previewDirty: boolean = false
    public signalHook: Signal
    public childItems: Set<Display>

}