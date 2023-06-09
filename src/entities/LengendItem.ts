class LegendItem {
  title:string
  color:string
  isFor:any
  textColor:any
  constructor(title:string, color:string, isFor:any, textColor:string| undefined) {
    this.title = title;
    this.color = color;
    this.isFor = isFor;
    this.textColor = textColor != null ? textColor : textColor;
  }
}

export default LegendItem;
