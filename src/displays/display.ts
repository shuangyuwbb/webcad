import { Entity } from "@/model"
import { Signal } from "@fsdev/fs-utils"

export class Display<V, C, E extends Entity = Entity> {
    protected _viewObj: V | undefined
    protected _entityId: number | undefined

    public isLayer: boolean = false
    public dirty: boolean = false
    public materialDirty: boolean
    public geometryDirty: boolean
    public positionDirty: boolean
    public previewDirty: boolean
    public signalHook: Signal | undefined
    public childItems: Set<Display<V, C, E>> | undefined

    public parent?: Display<V, C, E>

    constructor(
        protected _context: C,
        protected _entity: E,
    ) {
        this.dirty = true
        this.materialDirty = true
        this.geometryDirty = true
        this.positionDirty = true
        this.previewDirty = false

        this._entityId = this._entity.id
        this.signalHook = new Signal()


    }



}