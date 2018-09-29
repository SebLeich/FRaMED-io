package io.framed.util

/**
 * @author lars
 */
interface Validator<T : Any> {

    fun validate(value: T): Result

    enum class Result {
        VALID, PARTIAL, ERROR
    }
}

class TrueValidator<T : Any> : Validator<T> {
    override fun validate(value: T): Validator.Result = Validator.Result.VALID
}

class RegexValidator(private val regex: Regex) : Validator<String> {
    override fun validate(value: String): Validator.Result {
        return if (regex.matches(value)) Validator.Result.VALID else Validator.Result.ERROR
    }
}
