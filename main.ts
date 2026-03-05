namespace StatusBarKind {
    export const oxygen = StatusBarKind.create()
}
function gamestart () {
    info.setScore(0)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
        ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
        ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
        ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
        fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
        ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
        ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
        cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
        cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
        cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
        ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    freddy = 1
    ballora = 1
    ennard = 1
    greencam = 0
    minireena = 0
    miniroom = 0
    begin = 1
    statusbar = statusbars.create(80, 10, StatusBarKind.oxygen)
    statusbar.setBarBorder(3, 15)
    statusbar.positionDirection(CollisionDirection.Top)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (begin == 1) {
        if (cams == 1) {
            if (camera == 4) {
                if (freddy == 1) {
                    scene.setBackgroundImage(assets.image`myImage1`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage3`)
                }
                camera = 1
            } else if (camera == 7) {
                if (freddy == 2) {
                    scene.setBackgroundImage(assets.image`myImage10`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage8`)
                }
                camera = 4
            } else if (camera == 5) {
                if (ennard == 1) {
                    scene.setBackgroundImage(assets.image`myImage5`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage2`)
                }
                camera = 2
            } else if (camera == 8) {
                if (ennard == 2) {
                    scene.setBackgroundImage(assets.image`myImage12`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage11`)
                }
                camera = 5
            } else if (camera == 6) {
                if (ballora == 1) {
                    scene.setBackgroundImage(assets.image`myImage7`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage6`)
                }
                camera = 3
            } else if (camera == 9) {
                if (ballora == 2) {
                    scene.setBackgroundImage(assets.image`myImage14`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage13`)
                }
                camera = 6
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (begin == 1) {
        if (cams == 1) {
            if (camera == 1) {
                scene.setBackgroundImage(assets.image`myImage9`)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                timer.after(200, function () {
                    game.gameOver(false)
                })
            } else if (camera == 2) {
                scene.setBackgroundImage(assets.image`myImage4`)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                timer.after(200, function () {
                    game.gameOver(false)
                })
            } else if (camera == 3) {
                scene.setBackgroundImage(assets.image`myImage39`)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                timer.after(200, function () {
                    game.gameOver(false)
                })
            } else if (camera == 4) {
                if (freddy == 2) {
                    scene.setBackgroundImage(assets.image`myImage24`)
                    timer.after(150, function () {
                        scene.setBackgroundImage(assets.image`myImage8`)
                    })
                    freddy = 1
                } else {
                    scene.setBackgroundImage(assets.image`myImage9`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            } else if (camera == 7) {
                if (freddy == 3) {
                    scene.setBackgroundImage(assets.image`myImage27`)
                    timer.after(150, function () {
                        scene.setBackgroundImage(assets.image`myImage15`)
                    })
                    freddy = 2
                } else {
                    scene.setBackgroundImage(assets.image`myImage9`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            } else if (camera == 5) {
                if (ennard == 2) {
                    scene.setBackgroundImage(assets.image`myImage25`)
                    timer.after(150, function () {
                        scene.setBackgroundImage(assets.image`myImage11`)
                    })
                    ennard = 1
                } else {
                    scene.setBackgroundImage(assets.image`myImage4`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            } else if (camera == 8) {
                if (ennard == 3) {
                    scene.setBackgroundImage(assets.image`myImage28`)
                    timer.after(150, function () {
                        scene.setBackgroundImage(assets.image`myImage17`)
                    })
                    ennard = 2
                } else {
                    scene.setBackgroundImage(assets.image`myImage4`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            } else if (camera == 6) {
                if (ballora == 2) {
                    scene.setBackgroundImage(assets.image`myImage26`)
                    timer.after(150, function () {
                        scene.setBackgroundImage(assets.image`myImage13`)
                    })
                    ballora = 1
                } else {
                    scene.setBackgroundImage(assets.image`myImage39`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            } else if (camera == 9) {
                if (ballora == 3) {
                    scene.setBackgroundImage(assets.image`myImage29`)
                    timer.after(150, function () {
                        scene.setBackgroundImage(assets.image`myImage19`)
                    })
                    ballora = 2
                } else {
                    scene.setBackgroundImage(assets.image`myImage39`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            }
        } else {
            if (miniroom == 1) {
                if (minireena == 1) {
                    scene.setBackgroundImage(img`
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeee4e4eeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeee4eeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeee4eeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeee4eeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeee4eeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeee4eeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeee4eeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeee4eeeeeeeeeeeeeeeeee44eeeeeeeeeefccccccfeeeeeeeee4eeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                        bbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbbbbbbfeeeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                        bbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbbbbbbfeeeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                        bbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbbbbbbfeeeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                        bbbbbbffffffffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeee4eeeefbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        `)
                    minireena = 0
                } else if (minireena == 2) {
                    scene.setBackgroundImage(assets.image`myImage38`)
                    minireena = 1
                } else if (minireena == 3) {
                    scene.setBackgroundImage(assets.image`myImage37`)
                    minireena = 2
                }
            } else {
                if (greencam == 0) {
                    if (cams == 0) {
                        scene.setBackgroundImage(img`
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777777777777777ff77777777777ff77777fffff77777ff7777777777ff77777777777ff77777777777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777777777777777ff77777777777ff777777fff777777ff7777777777ff77777777777ff77777777777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777777777777777ff77777777777ff7777777f7777777ff7777777777ff77777777777ff77777777777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777777777777777ff777fffffffff777fffff777ff777fffff777ff777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777f7777777f777ff777fffffffff777fffff777ff777fffff777ff777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777ff77777ff777ff777fffffffff777fffff777ff777fffff777ff777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fff777fff777ff777fffffffff777fffff777ff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff77777777777ff777ffff7ffff777ff777fffffffff777fffff777ff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff77777777777ff777fffffffff777ff777fffffffff77777777777ff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff77777777777ff777fffffffff777ff777fffffffff77777777777ff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff77777777ffff77777777777ff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff77777777ffff777777fffffff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff77777777ffff777777fffffff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777777fffffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777777fffffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777777fffffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fff777ffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fff777ffff777fffff777ffffffff777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fff777ffff777fffff777ffffffff777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fffff777ff777fffff777ffffffff777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777777777777777ff777fffff777ff777fffffffff777ff7777777777ff777fffff777ff777fffff777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777777777777777ff777fffff777ff777fffffffff777ff7777777777ff777fffff777ff777fffff777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777777777777777ff777fffff777ff777fffffffff777ff7777777777ff777fffff777ff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff7777777777ff777fffff777ff777fffffff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff7777777777ff777777ff777ff777fffffff7777777ff7777ffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff7777777777ff777777ff777ff777fffffff7777777ff77777fff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff7777777f777ff777fffffffff777ffff7777777f777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff77777777777ff777fffffffff777ffff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777f7777777ff777fffffffff777ffff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777ff777777ff777fffffffff777ffff777ff777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff7777777777ff777fffff777ff77777777ff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff7777777777ff777fffff777ff77777777ff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff7777777777ff777fffff777ff77777777ff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffff7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777ffffffffffffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777ffffffffffffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777ff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            `)
                    } else if (cams == 3) {
                        scene.setBackgroundImage(assets.image`myImage30`)
                    }
                    greencam = 1
                } else if (greencam == 1) {
                    scene.setBackgroundImage(img`
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                        cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                        cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                        cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                        222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                        2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                        22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                        222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                        c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                        ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                        cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                        ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
                        ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
                        ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
                        ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
                        fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                        fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                        fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
                        ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
                        ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
                        cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
                        cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
                        cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
                        ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
                        ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
                        ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                        cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                        cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                        cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                        ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                        `)
                    greencam = 0
                    miniroom = 0
                }
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (begin == 1) {
        if (cams == 0 && airoom == 0) {
            if (greencam == 0) {
                if (freddy == 1) {
                    scene.setBackgroundImage(assets.image`myImage1`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage3`)
                }
                camera = 1
                cams = 1
            }
        } else if (cams == 1) {
            scene.setBackgroundImage(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
                ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
                ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
                ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
                fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
                ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
                ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
                cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
                cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
                cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
                ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
                ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
                ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
            miniroom = 0
            cams = 0
        } else if (cams == 3) {
            if (greencam == 1) {
                scene.setBackgroundImage(assets.image`myImage31`)
                greencam = 3
                timer.after(2000, function () {
                    scene.setBackgroundImage(assets.image`myImage32`)
                    timer.after(2000, function () {
                        scene.setBackgroundImage(assets.image`myImage33`)
                        timer.after(2000, function () {
                            scene.setBackgroundImage(assets.image`myImage34`)
                            timer.after(2000, function () {
                                scene.setBackgroundImage(assets.image`myImage35`)
                                timer.after(1000, function () {
                                    scene.setBackgroundImage(img`
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777777777777777ff77777777777ff77777fffff77777ff7777777777ff77777777777ff77777777777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777777777777777ff77777777777ff777777fff777777ff7777777777ff77777777777ff77777777777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777777777777777ff77777777777ff7777777f7777777ff7777777777ff77777777777ff77777777777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777777777777777ff777fffffffff777fffff777ff777fffff777ff777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777f7777777f777ff777fffffffff777fffff777ff777fffff777ff777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777ff77777ff777ff777fffffffff777fffff777ff777fffff777ff777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fff777fff777ff777fffffffff777fffff777ff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff77777777777ff777ffff7ffff777ff777fffffffff777fffff777ff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff77777777777ff777fffffffff777ff777fffffffff77777777777ff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff77777777777ff777fffffffff777ff777fffffffff77777777777ff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff77777777ffff77777777777ff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff77777777ffff777777fffffff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff77777777ffff777777fffffff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777777fffffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777777fffffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777777fffffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fff777ffff777fffff777ffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fff777ffff777fffff777ffffffff777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fff777ffff777fffff777ffffffff777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffffffffffffff777fffff777ff777fffffffff777ff777fffffffff777fffff777ff777fffff777ffffffff777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777777777777777ff777fffff777ff777fffffffff777ff7777777777ff777fffff777ff777fffff777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777777777777777ff777fffff777ff777fffffffff777ff7777777777ff777fffff777ff777fffff777ff777777777fff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777777777777777ff777fffff777ff777fffffffff777ff7777777777ff777fffff777ff777fffff777ff777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff7777777777ff777fffff777ff777fffffff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff7777777777ff777777ff777ff777fffffff7777777ff7777ffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff7777777777ff777777ff777ff777fffffff7777777ff77777fff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff7777777f777ff777fffffffff777ffff7777777f777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff77777777777ff777fffffffff777ffff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777f7777777ff777fffffffff777ffff77777777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777ff777777ff777fffffffff777ffff777ff777777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff777ffff777ff777fffff777ff777fffffffff777ffff777fffff777ff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff7777777777ff777fffff777ff77777777ff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff7777777777ff777fffff777ff77777777ff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffff7777777777ff777fffff777ff77777777ff7777777ff777fffff777ff77777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffff7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777ffffffffffffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777ffffffffffffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777fffffffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffff77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777ff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                        `)
                                    greencam = 1
                                    cams = 0
                                })
                            })
                        })
                    })
                })
            } else {
                if (miniroom == 0 && airoom == 0) {
                    game.showLongText("Camera System Reboot Needed", DialogLayout.Bottom)
                }
            }
        } else if (airoom == 1) {
            statusbar.value += 10
        } else {
        	
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (begin == 1) {
        if (cams == 1) {
            if (camera == 1) {
            	
            } else if (camera == 2) {
                if (freddy == 1) {
                    scene.setBackgroundImage(assets.image`myImage1`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage3`)
                }
                camera = 1
            } else if (camera == 3) {
                if (ennard == 1) {
                    scene.setBackgroundImage(assets.image`myImage5`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage2`)
                }
                camera = 2
            } else if (camera == 5) {
                if (freddy == 2) {
                    scene.setBackgroundImage(assets.image`myImage10`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage8`)
                }
                camera = 4
            } else if (camera == 6) {
                if (ennard == 2) {
                    scene.setBackgroundImage(assets.image`myImage12`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage11`)
                }
                camera = 5
            } else if (camera == 8) {
                if (freddy == 3) {
                    scene.setBackgroundImage(assets.image`myImage16`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage15`)
                }
                camera = 7
            } else if (camera == 9) {
                if (ennard == 3) {
                    scene.setBackgroundImage(assets.image`myImage18`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage17`)
                }
                camera = 8
            }
        } else if (greencam == 0 && airoom == 0) {
            miniroom = 1
            if (minireena == 0) {
                scene.setBackgroundImage(img`
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeee4e4eeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeee4eeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeee4eeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeee4eeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeee4eeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeee4eeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeee4eeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeee4eeeeeeeeeeeeeeeeee44eeeeeeeeeefccccccfeeeeeeeee4eeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    ccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccccccfeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfeeeeeeeeeeeeeeeeeeeefccccccc
                    bbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbbbbbbfeeeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                    bbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbbbbbbfeeeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                    bbbbbbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbbbbbbfeeeeeeeeeeeeeeeeeefbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                    bbbbbbffffffffffffffffffffffffffffffffffffffbbbbbbffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeee4eeeefbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfeeeeeeeeeeeeeeeeeeeefbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    `)
            } else if (minireena == 1) {
                scene.setBackgroundImage(assets.image`myImage38`)
            } else if (minireena == 2) {
                scene.setBackgroundImage(assets.image`myImage37`)
            } else if (minireena == 3) {
                scene.setBackgroundImage(assets.image`myImage36`)
            }
        } else if (airoom == 1) {
            scene.setBackgroundImage(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
                ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
                ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
                ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
                fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
                ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
                ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
                cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
                cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
                cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
                ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
                ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
                ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
            airoom = 0
        } else {
        	
        }
    }
})
statusbars.onZero(StatusBarKind.oxygen, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (begin == 1) {
        if (cams == 1) {
            if (camera == 1) {
                if (ennard == 1) {
                    scene.setBackgroundImage(assets.image`myImage5`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage2`)
                }
                camera = 2
            } else if (camera == 2) {
                if (ballora == 1) {
                    scene.setBackgroundImage(assets.image`myImage7`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage6`)
                }
                camera = 3
            } else if (camera == 4) {
                if (ennard == 2) {
                    scene.setBackgroundImage(assets.image`myImage12`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage11`)
                }
                camera = 5
            } else if (camera == 5) {
                if (ballora == 2) {
                    scene.setBackgroundImage(assets.image`myImage14`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage13`)
                }
                camera = 6
            } else if (camera == 7) {
                if (ennard == 3) {
                    scene.setBackgroundImage(assets.image`myImage18`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage17`)
                }
                camera = 8
            } else if (camera == 8) {
                if (ballora == 3) {
                    scene.setBackgroundImage(assets.image`myImage20`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage19`)
                }
                camera = 9
            }
        } else if (miniroom == 1) {
            scene.setBackgroundImage(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
                ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
                ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
                ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
                fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
                ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
                ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
                cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
                cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
                cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
                ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
                ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
                ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
            miniroom = 0
        } else if (cams == 0 && miniroom == 0) {
            scene.setBackgroundImage(img`
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccfffbbbbbbbbbbbbbfffcccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffcccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffcccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccccccc88fffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccc88cfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccc88ccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccccccccccccccccccccccc88cccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccc88ccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88cccccccccccccccccccccccccccccccc8ccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc88cccccccccccccccccccccccccccc888cccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcc888ccccccccccccccccccccccccc88cccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccc8ccccccccccccccccccccccc8cccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccc888ccccccccccccccccc888ccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccc8888888cc88888888cccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccc88cccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccc222fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffff2cccccccccccccccccccccccccccc222ccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffc22ccccccccccccccccccccccccc22ccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcc22ccccccccccccccccccccc222ccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccc2222cccccccccccccc2222ccccccccfbbbbbbbbbbbbbbbb222222222bbbbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccc2222ccc2222222ccccccccccccfbbbbbbbbbbbbbb22fffffffff22bbbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffcccccccccccc222cccccccccccccccccccfbbbbbbbbbbbbb2fffffffffffff2bbbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbb2fffffffffffffff2bbbbbbbbbbbbbfccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbb2ffff2222222ffff2bbbbbbbbbbbbbfffffffffffccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2ffff222222222ffff2bbbbbbbbbbbbf555555555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2fff22222222222fff2bbbbbbbbbbbbf555555555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2fff22222222222fff2bbbbbbbbbbbbf555555555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2fff22222222222fff2bbbbbbbbbbbbf555555555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2fff22222222222fff2bbbbbbbbbbbbffffff5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2fff22222222222fff2bbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2fff22222222222fff2bbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2fff22222222222fff2bbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbb2ffff222222222ffff2bbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbb2ffff2222222ffff2bbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbb2fffffffffffffff2bbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbb2fffffffffffff2bbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbb22fffffffff22bbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbb222222222bbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffff5555ffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffff5555ffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffff5555ffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffff5555ffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffff5555ffffffffffffffffffffffffffffffffffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                cccccccccccccccfffffccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffccccf5555fccccccccccccccccccccccccccccccfffffccccccccccccccccc
                `)
            airoom = 1
        } else {
        	
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (begin == 1) {
        if (cams == 1) {
            if (camera == 1) {
                if (freddy == 2) {
                    scene.setBackgroundImage(assets.image`myImage10`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage8`)
                }
                camera = 4
            } else if (camera == 4) {
                if (freddy == 3) {
                    scene.setBackgroundImage(assets.image`myImage16`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage15`)
                }
                camera = 7
            } else if (camera == 2) {
                if (ennard == 2) {
                    scene.setBackgroundImage(assets.image`myImage12`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage11`)
                }
                camera = 5
            } else if (camera == 5) {
                if (ennard == 3) {
                    scene.setBackgroundImage(assets.image`myImage18`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage17`)
                }
                camera = 8
            } else if (camera == 3) {
                if (ballora == 2) {
                    scene.setBackgroundImage(assets.image`myImage14`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage13`)
                }
                camera = 6
            } else if (camera == 6) {
                if (ballora == 3) {
                    scene.setBackgroundImage(assets.image`myImage20`)
                } else {
                    scene.setBackgroundImage(assets.image`myImage19`)
                }
                camera = 9
            }
        }
    }
})
spriteutils.createRenderable(99999, function (screen2) {
    for (let index = 0; index <= 119; index++) {
        for (let index2 = 0; index2 <= 159; index2++) {
            screen2.setPixel(index2, index, image.screenImage().getPixel(index2 + randint(randint(randint(randint(1, 1), 0), 0), randint(randint(randint(2, 2), 1), 1)), index))
        }
    }
})
let airoom = 0
let camera = 0
let cams = 0
let statusbar: StatusBarSprite = null
let miniroom = 0
let minireena = 0
let greencam = 0
let ennard = 0
let ballora = 0
let freddy = 0
let ai = 0
let begin = 0
begin = 0
scene.setBackgroundImage(img`
    fccccccccaccccccccffcccfccccfcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777555555fffffffffffffffffffffffffffffffff
    fccccccccfccccccccffcccfccccfcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555777755fffffffffffffffffffffffffffffffff
    fccccccccfccccccccffcccfccccfcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555777755fffffffffffffffffffffffffffffffff
    fccccfffffccccfcccffcccfccccfccccfccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555577fffffffffffffffffffffffffffffffff
    fccccaafffccccfcccafcccfccccaccccfccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555577fffffffffffffffffffffffffffffffff
    fccccfffffccccfcccffcccfccccfccccaccccaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555577fffffffffffffffffffffffffffffff
    fccccfffffccccfcccffcccaccccfccccfccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555577fffffffffffffffffffffffffffffff
    fcccccccafccccfcccaacccfccccfcccccccccaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444fffffffffffffffffffffffffffff
    fcccccccffccccfcccffcccfccccfcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444fffffffffffffffffffffffffffff
    fcccccccffccccfcccffcccfccccfcccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111cccccccccccff11111ffffffffffffffffffffffff
    fccccfffffccccacccffcccfccccfccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111cccccccccccff11111ffffffffffffffffffffffff
    fccccfffffccccfcccffcccfccccfccccccaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffccccffffcc11111ffffffffffffffffffffffff
    fccccaafffccccccccffccccccccaccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111cccffffcccccc11111ffffffffffffffffffffffff
    fccccfffffccccccccffccccccccfccccffcccaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111cccffffcccccc11111ffffffffffffffffffffffff
    fccccfffffccccccccffccccccccfccccaacccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111cccffffcccccc11111ffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111cccffffcccccc11111ffffffffffffffffffffffff
    fccccfffcccfccccccffccccccccfccccfccccfccccccfccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff111111cccc111cccfccc1111cc11111ffffffffffffffffffffffff
    fcccccffcccfccccccffccccccccfccccfccccfccccccaccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff1111cccccc111cccc111ff11cc11111ffffffffffffffffffffffff
    fcccccafcccaccccccafccccccccaccccaccccfccccccfccccccaffffffffffffffffffffffffffffffffffffffffffffffffffff1111cccccc111cccc1112f11cc11111ffffffffffffffffffffffff
    fccccccccccfccccccffccccccccfccccfccccfccccccfccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff1111cccccc111cccc1112f11cc11111ffffffffffffffffffffffff
    fccccccccccfffcccfffcccffffffccccfccccffccccffccccaffffffffffffffffffffffffffffffffffffffffffffffffffffff1111cccccc111cccc111ff11cc11111ffffffffffffffffffffffff
    fccccccccccfffcccfffcccaaffffcccccccccffccccffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff1111cccccc111cccc111ff11cc11111ffffffffffffffffffffffff
    fccccfcccccfffcccaafcccffffffcccccccccffccccafccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff11111111112222222ccc1111cc1111111ffffffffffffffffffffff
    fccccfffcccfffcccfffcccfccccfcccccccccaaccccffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff11111111112222222cccffcccc1111111ffffffffffffffffffffff
    fccccaafcccaafcccfffcccaccccfcccccccccffccccffccccccaafffffffffffffffffffffffffffffffffffffffffffffffffff11111111112222222cccffcccc1111111ffffffffffffffffffffff
    fccccfffcccfffcccfffcccfccccfccccfccccffccccaafffcccfffffffffffffffffffffffffffffffffffffffffffffffffffff11111111112222222cccffcccc1111111ffffffcccfffffffffffff
    fccccaffcccfccccccffccccccccfccccfccccafccccffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff11111111112222222cccffcccc1111111ffffffcccfffffffffffff
    fccccfffcccfccccccffccccccccaccccfccccffccccffccccccaffffffffffffffffffffffffffffffffffffffffffffffffffff11111111112222222cccffcccc1111111ffffffcccfffffffffffff
    fccccfffcccfccccccaaccccccccfccccfccccffccccffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffccccffccff1111111fffffcffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffff1111111111111cccffffccffcc11111cccccccfffffffffffffffff
    fcccccccccfccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffff1111111111111cccffffccffcc11111cccccccfffffffffffffffff
    fcccccccccfccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcccccccccfffffffffffcccffcccccccccccffffffffffffffffffffff
    fcccccccccfccccccaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcccccccccfffffffffffcccffcccccccccccffffffffffffffffffffff
    fcccccccccfccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccc111111fffcfffcccffffcccc111111111ffffffffffffffffffffff
    fccccfccccffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccc111111fffcfffcccffffcccc111111111ffffffffffffffffffffff
    fcccccccccafccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccc111111fffcfffcccffffcccc111111111ffffffffffffffffffffff
    fcccccccccffccccafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffccf111111111cfffccccfffffcc111111111ccccccccffffffffffffff
    fcccccccccffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffccf111111111cfffccccfffffcc111111111ccccccccffffffffffffff
    fcccccccccffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccf1111111111111111fccc1111111111111ffffffffcfffffffffffff
    fccccfccccffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccc111111111111cccc11111111111ffffffffffcfffffffffffff
    fccccaccccaaccccaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffccff111111111111cccc11111111111ffffccfffffffffcffffffff
    fccccfccccffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcccff111111111111cccc11111111111ffccfffcffffffccffffffff
    fccccfccccffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffcfcccff1111111111cccc111111111cfffcffffcffffffcfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffcfcccff1111111111cccc111111111cfffcffffcffffffcfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccffcccffffcfffcccffffccffffcffcfcccfffccccccccffffccffff
    fccccccccaccccaaccccfcccaffccccaccccccccfcccccccccfccccccaffccfccccccffffffffffffffffffffcfffcccfffffcccfcccccccccffff2222222fcfffccffccccffffcffffffffcccffffff
    fccccccccfcccccfccccacccccfccccfccccccccacccccccccacccccccfffcaccccccaaffffffffffffffffffcfffcccffcccffffccccccccccccf2222222ffccccfffcfffffccffffccfffcccffffff
    fccccccccfccccccccccfccccccccccfccccccccfccccfccccfccccfccfffcfccccccffffffffffffffffffffcffffccfcfffffffcccccccccfccc2222222ffccfffffcffffcffffffcffffcccffffff
    fccccfffffccccccccccfccccccccccfcccafcccfccccaccccfccccfccaafffccccafffffffffffffffffffffcffffccfcfffffffcccccccccfccc2222222ffccfffffcffffcffffffcffffcccffffff
    fcccccffffccccccccccfccccccccccfccccccccfcccccccccfccccfccfffffccccccfffffffffffffffcfffffccffccccffccccccccccccccc222fff2fff22cccccccccccccffffccffffcfffffffff
    fcccccaaffccccccccccfccccccccccfccccccccfcccccccccfccccfccfffffccccccffffffffffffffffcffffccffffcfccffcccccccfcccff222222222222ccfcfffccffffccccccfcccffffffffff
    fcccccafffccccfcccccfcccffcccccaccccccccfcccccccccfccccaccfffffccccccffffffffffffffffcccffccfffffcccffcccccccffcccf222222222222ccfcfffccffffccccfffcccffffffffff
    fccccfffffccccffccccacccfffccccfccccccccacccccaafffccccfccffffffffcccaafffffffffffffffccffccfccccccccccccffffcccccf222fff2fff22ffcccccffffcccccfccccccccffffffff
    fccccccccfccccffccccfcccaafccccfcccffcccfcccccfffffccccfccfffffccccccfffffffffffffcccccccccccfffccccffccfccffffccccccc2222222ccccffcccccccccfffccccffffcccffffff
    fccccccccfccccafccccfcccfffccccfcccaacccfcccffccccfcccccccfffffccccccaffffffffffffcccccccccccfffccccffccfccffffccccccc2222222ccccffcccccccccfffccccffffcccffffff
    fccccccccaccccffccccfcccaffccccfcccffcccfcccffccccaccccccaaffffccccccfffffffffffffcccccccccccfffccccfcccfccffffccccccc2222222ccccffcccccccfcccfccccfffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffccfffcccfcccccccfcfffccccccfffccccfffccccccffccfffccccffccccccccccffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffcccccccfcccccffcccccffccccfffccccfffccccccffccfffccccffffccccccccffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcccccccccccffffcfcccffffcccccccccccccfffffffcccccccffcccccccccfffcfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcccccccccccffffcfcccffffcccccccccccccfffffffcccccccffcccccccccfffcfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcccccccfffcfffffccfffffccfffffffcfffffffcccffcccccccffffffccfcccfcccccccffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffffffcfccffffffffffcffffffffffffffffccfffffcfffffffffccffcccfccfcffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccccfffcfccffffffffffffffffffffffffffffffffffccccffffffffcfffccccfcffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffccccffcfccffffffffffffffffffffffffffffffffffffffffffffffccfffcfffcffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcccffcccfffffffffffffffffffffffffffffffffffffffffffccccccccfffcccffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcccffcccfffffffffffffffffffffffffffffffffffffffffffccccccccfffcccffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffccffffcfffffffffffffffffffffffffffffffffffffffffffccfcffccfffccccfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffcffffffffffffffffffffffffffffffffffffffffffffffffccfcfffcfffcffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffcffffffffffffffffffffffffffffffffffffffffffffccffccffffccffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcccfcfffcfffffffffffffffffffffffffffffffffffffffffffcccffccfccccfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcccfcfffcfffffffffffffffffffffffffffffffffffffffffffcccffccfccccfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccccffccffffffffffffffffffffffffffffffffffffffffffcccccfffcfffcfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffcfcccfffffffffffffffffffffffffffffffffffffffffffcfccccccffffccffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccffccffffffffffffffffffffffffffffffffffffffffffcccfccfcccccffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcccfccffffffffffffffffffffffffffffffffffffffffffffffccffccfccccfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcccfccffffffffffffffffffffffffffffffffffffffcffcccccccfffcfffffccfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffccccffccfffffffffffffffffffffffffffffffffffffccfcffffffcfccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfffccccfccfffffffffffffffffffffffffffffffffffffccfccccfffcfccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffffffcfccffffffffffffffffffffffffffffffffffffcccffccccffcfccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffcfffcccccccfffffffffffffffffffffffffffffffffffffffffccfcccffcccffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfcffffffffffffffffffffffffffffffffffffffffffffffccfcccffcccffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffccccccffffffffffffffffffffffffffffffffffffffffffffffccffccffffcffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfcccfcccfffffffffffffffffffffffffffffffffffffffffffcfcffcfffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfcccfcccfffffffffffffffffffffffffffffffffffffffffffccccccfffcfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffccccffffcffffffffffffffffffffffffffffffffffffffffcccfcccfcfffcfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcffcfffcffffffffffffffffffffffffffffffffffffffffcccfcccfcfffcfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffccffffcffffffffffffffffffffffffffffffffffffffffcffffccccffccfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcccffcccffffffffffffffffffffffffffffffffffffffffcfffcffcfcccffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcccffcccffffffffffffffffffffffffffffffffffffffffcffffccffccfffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffccccffcfccfffffffffffffffffffffffffffffffffffffffffcccffcccfccfffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccccfffcfccfffffffffffffffffffffffffffffffffffffffffcccffcccfccfffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffffffcfccffffffffffffffffffffffffffffffffffffffffffccfcffccccffccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccfffcfffffccffffffffffffffffffffffffffffffffffffffccfcfffccccfccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcccccccccccffffffffffffffffffffffffffffffffffffffffffccfcffffffcfccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccfcfffffffffffffffffffffffffffffffffffffffffccfffffcfffcccccccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcccffcccfffffffffffffffffffffffffffffffffffffffffffffcffcfcffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcccffcccfffffffffffffffffffffffffffffffffffffffffcfffccccccffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffccffffcfffffffffffffffffffffffffffffffffffffffffcfffcfcccfcccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffcffffffffffffffffffffffffffffffffffffffffffffffcfffcfcccfcccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffcffffffffffffffffffffffffffffffffffffffffffccffccccffffcfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcccfcfffcfffffffffffffffffffffffffffffffffffffffffffcccfcffcfffcfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcccfcfffcffffffffffffffffffffffffffffffffffffffffffffccffccffffcfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccccffccffffffffffffffffffffffffffffffffffffffffffffccfcccffcccfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffcfcccfffffffffffffffffffffffffffffffffffffffffffffccfcccffcccfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccffccffffffffffffffffffffffffffffffffffffffffffccffccccffcfccffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcccfccffffffffffffffffffffffffffffffffffffffffffccfccccfffcfccffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcccfccffffffffffffffffffffffffffffffffffffffffffccfcffffffcfccffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffccccffccfffffffffffffffffffffffffffffffffffffccccccccfffcfffffccffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfffccccfccfffffffffffffffffffffffffffffffffffffcfffcccccccccccffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffffffcfccfffffffffffffffffffffffffffffffffffffccccccccccfcfffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcfffcccccccffffffffffffffffffffffffffffffffffffffffccccffcfcfffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffccfffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
story.showPlayerChoices("Night 1", "Night 2", "Night 3", "Night 4")
if (story.checkLastAnswer("Night 1")) {
    gamestart()
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
        ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
        ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
        ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
        fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
        ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
        ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
        cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
        cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
        cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
        ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    game.showLongText("Hello. I am William Afton. You have found yourself- er- zrrr- Hey! I don't have much time. William will cut me off any second. I have to explain to you how to survive. Check cameras with SPACE. If an animatronics is in cam 4, 5, 6, 7, 8 or 9, zap them. If they aren't there, or if they are in cams 1, 2 or 3, don't zap them. Zap with X. To your left is a set of boxes. Little robots called Minireenas will start to appear there. Press X when they appear to slowly get rid of them. If your camera system fails, pull up your secondary moniter with X and reset it with SPACE. When the cameras are disconnected, the oxygen room to your right will not be accesible. When Afton cuts me off he will tell you stuff to do that will get you killed. Only do what I told you to do! Only- Hello. Sorry, Afton here. There was a malfunction. I am back now. Do not worry. To survive this job, all you have to do is sit tight. No one will harm you. It is simple. Now, I will speak with you tomorrow.", DialogLayout.Bottom)
    ai = 1
} else if (story.checkLastAnswer("Night 2")) {
    gamestart()
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
        ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
        ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
        ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
        fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
        ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
        ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
        cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
        cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
        cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
        ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    game.showLongText("Hello again. You survived. Due to you disregarding my instructions yesterday, your pay has been docked by 50%. Now, goodbye.", DialogLayout.Bottom)
    ai = 3
} else if (story.checkLastAnswer("Night 3")) {
    gamestart()
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
        ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
        ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
        ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
        fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
        ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
        ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
        cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
        cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
        cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
        ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    game.showLongText("Yet again you defy me. I will no longer pay you any money. On that note, you still must complete the four nights, as said in the document.", DialogLayout.Bottom)
    ai = 6
} else if (story.checkLastAnswer("Night 4")) {
    gamestart()
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
        ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
        cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
        ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
        ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
        ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
        ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
        fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
        ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
        ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
        cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
        cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
        cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
        ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
        ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
        ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    game.showLongText("You are fired. That is it. However, you are trapped here until 6 AM. You cannot survive. Have an incredible time.", DialogLayout.Bottom)
    ai = 9
}
game.onUpdateInterval(35000, function () {
    if (begin == 1) {
        if (info.score() == 5) {
            timer.after(100, function () {
                game.gameOver(true)
            })
        }
        info.changeScoreBy(1)
    }
})
game.onUpdate(function () {
    statusbar.value += -0.05
})
game.onUpdateInterval(5000, function () {
    if (begin == 1) {
        if (cams == 1) {
        	
        } else {
            if (Math.percentChance(ai * 10)) {
                if (freddy == 1) {
                    freddy = 2
                } else if (freddy == 2) {
                    if (Math.percentChance(50)) {
                        freddy = 1
                    } else {
                        freddy = 3
                    }
                } else if (freddy == 3) {
                    scene.setBackgroundImage(assets.image`myImage9`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            }
            if (Math.percentChance(ai * 10)) {
                if (ennard == 1) {
                    ennard = 2
                } else if (ennard == 2) {
                    if (Math.percentChance(50)) {
                        ennard = 1
                    } else {
                        ennard = 3
                    }
                } else if (ennard == 3) {
                    scene.setBackgroundImage(assets.image`myImage4`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            }
            if (Math.percentChance(ai * 10)) {
                if (ballora == 1) {
                    ballora = 2
                } else if (ballora == 2) {
                    if (Math.percentChance(50)) {
                        ballora = 1
                    } else {
                        ballora = 3
                    }
                } else if (ballora == 3) {
                    scene.setBackgroundImage(assets.image`myImage39`)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                    timer.after(200, function () {
                        game.gameOver(false)
                    })
                }
            }
        }
        if (Math.percentChance(ai * 10)) {
            minireena += 1
        }
    }
})
game.onUpdateInterval(5000, function () {
    if (begin == 1) {
        if (minireena == 3) {
            if (Math.percentChance(50)) {
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddfffffffdddfffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffdddfffffffdddffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffdddffffff1111111ffffffdddfffffffffffffffffffdddffffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffdddffffff11f1f11ffffffdddffffffffffffffffdddffffff1111111ffffffdddffffffffffffdddffffff1111111ffffffdddffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffdddffffff1ff1ff1ffffffdddffffffffffffffffdddffffff11f1f11ffffffdddffffffffffffdddffffff11f1f11ffffffdddffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffdddffffff1111111ffffffdddffffffffffffffffdddffffff1ff1ff1ffffffdddffffffffffffdddffffff1ff1ff1ffffffdddffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffdddffffff1fffff1ffffffdddffffffffffffffffdddffffff1111111ffffffdddffffffffffffdddffffff1111111ffffffdddffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffdddffffff11fff11ffffffdddffffffffffffffffdddffffff1fffff1ffffffdddffffffffffffdddffffff1fffff1ffffffdddffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffdddffffff1111111ffffffdddffffffffffffffffdddffffff11fff11ffffffdddffffffffffffdddffffff11fff11ffffffdddffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffdddfffffbbbfffffdddfffffffffffffffffffdddffffff1111111ffffffdddffffffffffffdddffffff1111111ffffffdddffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffdddfffffbbbfffffdddffffffffffffffffffffffdddfffffbbbfffffdddffffffffffffffffffdddfffffbbbfffffdddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffdddfffffbbbfffffdddffffffffffffffffffffffdddfffffbbbfffffdddffffffffffffffffffdddfffffbbbfffffdddfffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffffdddfffffbbbfffffdddffffffffffffffffffdddfffffbbbfffffdddfffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffff1111111111fffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffddddffffffdddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffddddffffffdddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffddddffffffdddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddffffffdddffffffffffffffffffffffffddddffffffdddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffffffddddfffddddddffffffffffffffffffffffffddddfffddddddfffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                timer.after(200, function () {
                    game.gameOver(false)
                })
            }
        }
    }
})
game.onUpdateInterval(20000, function () {
    if (begin == 1) {
        if (Math.percentChance(30)) {
            cams = 0
            airoom = 0
            miniroom = 0
            timer.after(50, function () {
                cams = 3
                airoom = 0
                scene.setBackgroundImage(img`
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccccfffffffffffffffccccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbffccccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccffbbbbbbbbbbbbbbbbbbbbbbbbbbbffccccccccccccccccccccccfffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccc8888fffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccc88888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                    cccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccc888888888888888fffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                    ccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfc8888888888888888cfffffccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffccccccccc
                    cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf888888888888cccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf88888ccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccfbb2222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccccfbb244444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccccfb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccfbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbbb777777777bbbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                    cccccccccccccccccccfbbb24444444442bbbbbbbbbbbbbbb76666666667bbbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                    cccccccccccccccccccfbbbb244444442bbbbbbbbbbbbbbb7666666666667bbbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                    cccccccccccccccccccfbbbbb2222222bbbbbbbbbbbbbbb766666666666667bbbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                    222ccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                    2222cccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                    22222cccccccccc2222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                    222222222ccc2222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                    c222222222222222222fbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                    ccc222222222222222cfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                    cccccc22222222cccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                    cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                    cccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb76666666666666667bbbbfcccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888899999888888886bbbbfffccccccccc
                    ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbbb766666666666667bbbbfccccccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                    ccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbb68888888888888888888886bbbbfffccccccccc
                    cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1ff11fff1f11f1f1fff11111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                    cccccccccccccccccccccfbbbbbbbbbbbbbbbbbbb1f1f1f1f1ff1f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbb688888888888888888886bbbbbfffccccccccc
                    ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f1ff1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbb6888888888888888886bbbbbbfffccccccccc
                    ccccccccccccccccccccccfbbbbbbbbbbbbbbbbbb1f1f1f1f1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbb68888888888888886bbbbbbbfffccccccccc
                    cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb1ff11fff1f11f1111f111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbb688888888888886bbbbbbbbfffccccccccc
                    cccccccccccccccccccccccfbbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbb6688888888866bbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccfbbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbb666666666bbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccccccccfbbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccccfbbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    cccccccccccccccccccccccccccfbbbbbbbbbbbbb111111111111111111111111111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccccccffbbbbbbbbbbb1111fff1fff1f1f1fff1fff1111111ccccccccccfffffccccccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccccccccffbbbbbbbbb11111f11f1f1f1f1f1111f11111111ccccccccccfffff222cccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccccccccccffbbbbbbb11111f11fff1f1f1fff11f11111111ccccccccccfffff2222ccccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccccccccccccffbbbbb11111f11ff11f1f111f11f11111111ccccccccccfffff222222ccc11111111111111111111111111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccccccccccccccfffff11111f11f1f1fff1fff11f11111111ccccccccccfffffc2222222c1fff1fff1fff1fff1f11f11111111111111bbbbbbbbbbbbbbbbbbfffccccccccc
                    ccccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffc222222221f1f1f1111f11f1f1ff1f11111111111111fffffffffffffffffffffccccccccc
                    ffffccccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccc222221fff1ff111f11f1f1f1ff11111111111111fffffffffffffffffffffccccccccc
                    ffffffccccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffcccccc2221f1f1f1111f11f1f1f11f11111111111111fffffffffffffffffffffccccccccc
                    ffffffffccccccccccccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccc221f1f1f1111f11fff1f11f11111111111111cccccccccccccccccccccccccccccc
                    fffffffffcccccccccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                    fffffffffffcccccccccccccccccccccccccccccc111f1f11f11ff1ff1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                    fffffffffffffcccccccccccccccccccccccccccc111fff11f11f1f1f1f1f1f11111111ccccccccccfffffccccccccc111111111111111111111111111111111112ccccccccccccccccccccccccccccc
                    ccffffffffffffccccccccccccccccccccccccccc111f1f11f11f111f11111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222ccc
                    ccccffffffffffffccccccccccccccccccccccccc111f1f1fff1f111f1f1f1f11111111ccccccccccfffffccccccccc11111111111111111111111111111111111222222222222222222222222222222
                    cccccfffffffffffffccccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f11fff1fff1ff11f1f1f11111111222222222222222222222222222222
                    cccccccffffffffffffcccccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f1f1f1f11111111ccccccccccccccccccccccccc22222
                    cccccccccffffffffffffcccccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11ff11f1f1f1f1f11111111cccccccccccccccccccccccccccccc
                    ccccccccccfffffffffffffcccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111f111f11f111f1f11111111111111cccccccccccccccccccccccccccccc
                    ccccccccccccffffffffffffccccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc1111111ff1fff1fff1ff11f1f1f11111111cccccccccccccccccccccccccccccc
                    ccccccccccccccffffffffffffccccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                    cccccccccccccccfffffffffffffccccccccccccc111111111111111111111111111111ccccccccccfffffccccccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                    cccccccccccccccccffffffffffffcccccccccccc111111111111111111111111111111ccccccccccfffff777cccccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                    cccccccccccccccccccffffffffffffcccccccccc111111111111111111111111111111ccccccccccfffff77777cccc11111111111111111111111111111111111cccccccccccccccccccccccccccccc
                    ccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffff777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccfffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffcccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccccccccfffffccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccccccccccccccccccccccccfffffcccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccccfffffccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccccccccccccccccccccccfffffcccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccffffffffffffccccccccccccccccccccccccccccccccccfffffcccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc222fffffffffffccccccccccccccccccccccccccccccccfffffccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc222cffffffffffffccccccccccccccccccccccccccccccfffffcccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc222ccffffffffffffcccccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc222ccccffffffffffffcccccccccccccccccccccccccccfffffcccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc222cccccfffffffffffffcccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc2222ccccccffffffffffffccccccccccccccccccccccccfffffccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc2222ccccccccffffffffffffccccccccccccccccccccccfffffcccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccccc222cccccccccfffffffffffffccccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc2222cccccccccccffffffffffffcccccccccccccccccccfffffcccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc2222cccccccccccccffffffffffffcccccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccccc222cccccccccccccccfffffffffffffcccccccccccccccfffffccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccc2222cccccccccccccccccffffffffffffccccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccc2222cccccccccccccccccccffffffffffffccccccccccccfffffcccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccfffffffffffffccccccccccfffffccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccffffffffffffcccccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccffffffffffffcccccccfffffccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccfffffffffffffcccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccccc222cccccccccccccccccccccccccccccffffffffffffccccfffffcccccccccccccccc7777cccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccffffffffffffccfffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccffffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccffffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccffffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccccccfffffffffffffccccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccccc2222ccccccccccccccccccccccccccccccccccccccccccffffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    cccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccccc22222ccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccc222222cccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    ccccccccccccccccccccccccc22222cccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccc
                    `)
            })
        }
    }
})
